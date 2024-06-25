import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RNFS from 'react-native-fs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  useCameraDevice,
  useCameraPermission,
  Camera as VisionCamera,
} from 'react-native-vision-camera';

import CustomStatusBar from '@components/CustomStatusBar';
import { SCREEN_DIMENSIONS } from '@constants/Common';
import { useAuth } from '@contexts/Auth';
import { KBHBuildTrackerImage } from '@models/db/KBHBuildTrackerImage';
import { SyncStatus } from '@models/Enums';
import { RootStackParamList } from '@routes/RootStackParam';
import {
  getDBConnection,
  getDraftBTImagesCount,
  saveKBHBTImage,
} from '@services/db/DbServices';
import { AppTheme } from '@styles/AppTheme';

import { PhotosNavProps } from './PhotosNavProps';

const Camera = () => {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const device = useCameraDevice('back');
  const [zoom, setZoom] = useState(device?.neutralZoom);
  const [selectedZoom, setSelectedZoom] = useState<number>(1);
  const [flash, setFlash] = useState<boolean>(false);
  const camera = useRef<VisionCamera | null>(null);
  const { hasPermission, requestPermission } = useCameraPermission();
  const [, setImageData] = useState<string[]>([]);
  const route = useRoute();
  const params = route.params as PhotosNavProps;
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const screenHeight = SCREEN_DIMENSIONS.height;
  const isLargeScreen = screenHeight > 800;
  const [, setShowAlert] = useState(false);
  const [savedImageCount, setSavedImageCount] = useState<number>(0);
  const auth = useAuth();
  const userName = auth.authData ? auth.authData.name : 'Guest';

  useEffect(() => {
    (async () => {
      const hasPermission = await requestPermission();
      if (!hasPermission) {
        setShowAlert(true);
      }
    })();
  }, [requestPermission]);

  useFocusEffect(
    React.useCallback(() => {
      setShowAlert(false);
      setImageData(params.capturedImages || []);
    }, [params.capturedImages]),
  );

  const childInfo: KBHBuildTrackerImage = {
    ImagePath: '',
    ImagePosition: 0,
    CapturedBy: userName,
    CapturedOn: new Date(),
    SyncStatus: SyncStatus.draft,
    RetryCount: 0,
    SyncedOn: new Date(),
    Remarks: '',
    HistoryId: null,
  };

  const handleCapture = async () => {
    if (camera.current) {
      const photo = await camera.current.takePhoto({
        flash: flash ? 'on' : 'off',
      });

      // Save the captured photo to FileStorage first
      const savedFilePath = await savePhotoToFileStorage(photo.path);
      console.log('Saved Photo Path', savedFilePath);

      try {
        const db = await getDBConnection();

        // Get the current draft image count
        const draftImageCount = await getDraftBTImagesCount(db);

        // Calculate the image position
        const imagePosition = draftImageCount;

        // Populate childInfo with the saved photo path and image position
        const updatedChildInfo = {
          ...childInfo,
          ImagePath: savedFilePath,
          ImagePosition: imagePosition,
        };

        // Insert child info with HistoryId as null using the saved photo path and image position
        await saveKBHBTImage(db, [updatedChildInfo]);

        // Update the draft image count after inserting the new photo
        const updatedDraftImageCount = await getDraftBTImagesCount(db);
        setSavedImageCount(updatedDraftImageCount);

        console.log('Draft image count updated:', updatedDraftImageCount);
      } catch (error) {
        console.error('Error inserting photo info to the database:', error);
      }

      // Capture photo animated from camera area to the album icon
      Animated.parallel([
        Animated.timing(slideAnimation, {
          toValue: 2,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnimation, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Reset animations after completion
        slideAnimation.setValue(0);
        scaleAnimation.setValue(1);
      });
    }
  };

  const savePhotoToFileStorage = async (photoPath: string) => {
    try {
      // Generate a unique filename for the photo
      const fileName = `${new Date().getTime()}.jpg`; // Adjust the extension as needed
      const directoryPath = `${RNFS.DocumentDirectoryPath}/assets`;

      // Ensure the assets directory exists
      const directoryExists = await RNFS.exists(directoryPath);
      if (!directoryExists) {
        await RNFS.mkdir(directoryPath);
      }

      const filePath = `${directoryPath}/${fileName}`;

      // Copy the photo to the app's assets directory
      await RNFS.copyFile(photoPath, filePath);
      // Return the saved file path
      return filePath;
    } catch (error) {
      console.error('Error saving photo to filesystem:', error);
      throw error; // Rethrow the error to handle it upstream
    }
  };

  const GetDraftImageCount = async () => {
    try {
      const db = await getDBConnection(); // Ensure this function correctly establishes a connection to your SQLite database
      // Get the draft image count from the database
      const draftImageCount = await getDraftBTImagesCount(db);
      // Update the saved image count state with the count
      setSavedImageCount(draftImageCount);
    } catch (error) {
      console.error('Error updating draft image count:', error);
    }
  };
  // Call this function whenever you need to update the draft image count
  GetDraftImageCount();

  const onAlbumClicked = async () => {
    try {
      // Define the directory where images are saved
      const directoryPath = `${RNFS.DocumentDirectoryPath}/assets`;

      // List the contents of the directory
      const files = await RNFS.readDir(directoryPath);
      // Log all files in the directory
      console.log('All files in directory:', files);

      // Filter out non-image files (adjust the filter as needed based on your file naming convention)
      const imageFiles = files.filter(
        file => file.isFile() && file.name.endsWith('.jpg'),
      ); // Adjust the extension as needed

      const photosProps: PhotosNavProps = {
        userLotSelection: params.userLotSelection,
        lotSelectedType: params.lotSelectedType,
        capturedImages: imageFiles.map(file => file.path), // Use the path property
        // fetchedData: fetchedData, // Pass fetched data
      };
      navigation.navigate('PhotosReview', photosProps); // Navigate to PhotosReview screen with props
    } catch (error) {
      console.error('Error retrieving photos from filesystem:', error);
    }
  };

  const toggleFlash = () => {
    setFlash(!flash);
  };

  if (device == null)
    return (
      <View style={{ marginTop: '50%', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>No Camera Found</Text>
        <Text>To Go back</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Click here!</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    hasPermission && (
      <CustomStatusBar>
        <View style={{ flex: 1 }}>
          <View style={styles.firstPortion}>
            <TouchableOpacity
              style={styles.flashButton}
              onPress={() => toggleFlash()}
            >
              {flash ? (
                <Ionicons name='flash' size={30} />
              ) : (
                <Ionicons name='flash-off' size={30} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.secondPortion} />
          <View style={{ flex: 0.4, zIndex: 1 }}>
            <Animated.View
              style={[
                StyleSheet.absoluteFill,
                {
                  transform: [
                    {
                      translateX: slideAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 85],
                      }),
                    },
                    {
                      translateY: slideAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: isLargeScreen ? [0, 175] : [0, 150],
                      }),
                    },
                    { scale: scaleAnimation },
                  ],
                },
              ]}
            >
              <VisionCamera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                ref={camera}
                photo={true}
                zoom={zoom}
              />
            </Animated.View>
          </View>
          <View style={styles.zoomPortion}>
            <View style={styles.zoomView}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderRadius: 20,
                  height: selectedZoom === 0.5 ? 33 : 25,
                  width: selectedZoom === 0.5 ? 33 : 25,
                  backgroundColor: 'black',
                  marginRight: 10,
                }}
                onPress={() => {
                  setZoom(0.5);
                  setSelectedZoom(0.5);
                }}
              >
                {selectedZoom === 0.5 ? (
                  <Text style={styles.selectedZoomText}>.5x</Text>
                ) : (
                  <Text style={styles.selectedZoomText}>.5</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderRadius: 20,
                  height: selectedZoom === 1 ? 33 : 25,
                  width: selectedZoom === 1 ? 33 : 25,
                  backgroundColor: 'black',
                  marginRight: 10,
                }}
                onPress={() => {
                  setZoom(1);
                  setSelectedZoom(1);
                }}
              >
                {selectedZoom === 1 ? (
                  <Text style={styles.selectedZoomText}>1x</Text>
                ) : (
                  <Text style={styles.selectedZoomText}>1</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderRadius: 20,
                  height: selectedZoom === 2 ? 33 : 25,
                  width: selectedZoom === 2 ? 33 : 25,
                  backgroundColor: 'black',
                  marginRight: 10,
                }}
                onPress={() => {
                  setZoom(2);
                  setSelectedZoom(2);
                }}
              >
                {selectedZoom === 2 ? (
                  <Text style={styles.selectedZoomText}>2x</Text>
                ) : (
                  <Text style={styles.selectedZoomText}>2</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderRadius: 20,
                  height: selectedZoom === 5 ? 33 : 25,
                  width: selectedZoom === 5 ? 33 : 25,
                  backgroundColor: 'black',
                }}
                onPress={() => {
                  setZoom(5);
                  setSelectedZoom(5);
                }}
              >
                {selectedZoom === 5 ? (
                  <Text style={styles.selectedZoomText}>5x</Text>
                ) : (
                  <Text style={styles.selectedZoomText}>5</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lastPortion}>
            <View style={styles.cancelTextView}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.shutterView}>
              <TouchableOpacity
                onPress={handleCapture}
                style={styles.shutterButton}
              />
            </View>
            <View style={styles.albumIcon}>
              <TouchableOpacity
                onPress={() => onAlbumClicked()}
                style={{ marginRight: 15 }}
                disabled={savedImageCount === 0}
              >
                <View
                  style={{
                    position: 'relative',
                    opacity: savedImageCount === 0 ? 0.5 : 1,
                  }}
                >
                  <Image source={require('@assets/camera/Album.png')} />
                  {savedImageCount > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{savedImageCount}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomStatusBar>
    )
  );
};

export default Camera;

const styles = StyleSheet.create({
  firstPortion: {
    flex: 0.15,
    backgroundColor: AppTheme.colors.camera_view_first_portion,
  },
  flashButton: {
    marginLeft: 20,
    marginTop: 40,
  },
  secondPortion: {
    flex: 0.125,
    backgroundColor: AppTheme.colors.camera_view_second_portion,
  },
  zoomPortion: {
    flex: 0.125,
    backgroundColor: AppTheme.colors.camera_view_second_portion,
  },
  zoomView: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 24,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 162,
  },
  selectedZoomText: {
    color: AppTheme.colors.surface,
    fontSize: 12,
  },
  lastPortion: {
    flex: 0.2,
    backgroundColor: AppTheme.colors.camera_view_first_portion,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cancelTextView: {
    flex: 1,
    alignItems: 'flex-start',
  },
  cancelText: {
    marginLeft: 15,
    fontSize: 18,
    color: AppTheme.colors.surface,
  },
  shutterView: {
    borderWidth: 2,
    borderColor: AppTheme.colors.surface,
    borderRadius: 40,
    alignItems: 'center',
  },
  albumIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  shutterButton: {
    borderWidth: 2,
    borderColor: AppTheme.colors.black,
    borderRadius: 40,
    backgroundColor: AppTheme.colors.surface,
    height: 60,
    width: 60,
  },
  badge: {
    position: 'absolute',
    left: -10,
    top: -10,
    backgroundColor: AppTheme.colors.camera_view_second_portion,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: AppTheme.colors.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  deniedPermissionView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deniedPermissionText: {
    color: AppTheme.colors.black,
    textAlign: 'center',
    fontSize: 15,
  },
  requestPermissionText: {
    marginTop: 20,
    color: AppTheme.colors.black,
    fontSize: 18,
  },
});
