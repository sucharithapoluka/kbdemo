import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RNFS from 'react-native-fs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  CIRCLE_OUTLINE,
  CIRCLE_WITH_FILLING,
  PHOTOS_PREVIEW_SQUARE_CHECKED_ICON,
  PHOTOS_PREVIEW_SQUARE_ICON,
} from '@assets/Svgs';
import { ContentStatusNavProps } from '@components/content-status/ContentStatusNavProps';
import CustomAlert from '@components/custom-alert/CustomAlert';
import CustomStatusBar from '@components/CustomStatusBar';
import Header from '@components/header/Header';
import Title from '@components/section-title/Title';
import { useAuth } from '@contexts/Auth';
import { KBHHistory } from '@models/db/KBHHistory';
import { HeaderTheme, LotSelectType } from '@models/Enums';
import { RootStackParamList } from '@routes/RootStackParam';
import {
  deleteBTImages,
  getBTHistoryAndImagesDataWithHistoryId,
  getDBConnection,
  getDraftBTImages,
  saveKBHHistory,
  updateBTImageData,
} from '@services/db/DbServices';
import { CommonStyles } from '@styles/App';
import { AppTheme } from '@styles/AppTheme';

import { PhotosNavProps } from './PhotosNavProps';

const Review = () => {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const [, setSelectedImage] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState([] as number[]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const route = useRoute();
  const params = route.params as PhotosNavProps;
  const [imageData, setImageData] = useState<string[]>(
    params.capturedImages || [],
  );
  const [showAlert, setShowAlert] = useState(false);
  const auth = useAuth();
  const userName = auth.authData ? auth.authData.name : 'Guest';

  useEffect(() => {
    const fetchImages = async () => {
      const db = await getDBConnection();
      const draftImages = await getDraftBTImages(db);
      setImageData(draftImages);
    };

    fetchImages();
  }, []);

  const renderImage = ({ item, index }: { item: string; index: number }) => (
    <>
      <TouchableOpacity
        onPress={() => {
          if (!selectMode) {
            setModalIndex(index);
            setModalVisible(true);
          } else {
            togglePhotoSelection(index);
          }
          setSelectedImage(item);
        }}
      >
        <View style={styles.imageView}>
          <Image source={{ uri: 'file://' + item }} style={styles.image} />
          {selectMode && selectedPhotos.includes(index) && (
            <CIRCLE_WITH_FILLING />
          )}
          {selectMode && !selectedPhotos.includes(index) && <CIRCLE_OUTLINE />}
        </View>
      </TouchableOpacity>
    </>
  );

  const togglePhotoSelection = (index: number) => {
    setSelectedPhotos(prevSelectedPhotos =>
      prevSelectedPhotos.includes(index)
        ? prevSelectedPhotos.filter(photoIndex => photoIndex !== index)
        : [...prevSelectedPhotos, index],
    );
  };

  const handleDeleteCancel = () => {
    setShowAlert(false); // Close the alert when cancel is pressed
  };

  const handleDelete = async () => {
    try {
      const filesToDelete = selectedPhotos
        .map(index => imageData[index])
        .filter((filePath): filePath is string => filePath !== undefined); // Type guard to filter out undefined values

      if (filesToDelete.length === 0) {
        return;
      }
      // Delete the selected images from the file system
      await Promise.all(
        filesToDelete.map(async filePath => {
          await RNFS.unlink(filePath);
        }),
      );
      // Get the database instance
      const db = await getDBConnection();
      // Delete the corresponding records from the SQLite database
      await deleteBTImages(db, filesToDelete);

      // Update the imageData state to remove the deleted images
      const updatedImageData = imageData.filter(
        (_, index) => !selectedPhotos.includes(index),
      );
      setShowAlert(false); // Close the alert after continuing
      setImageData(updatedImageData);
      // Reset the selected photos and close the alert
      setSelectedPhotos([]);
    } catch (error) {
      console.error('Error deleting images:', error);
    }
  };

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const renderModalContent = () => (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Image
          source={{ uri: 'file://' + imageData[modalIndex] }}
          style={styles.imagePreview}
        />
      </View>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setModalVisible(false)}
      >
        <SimpleLineIcons name='close' size={50} color='white' />
        <Text style={styles.modalCloseButton}>Close</Text>
      </TouchableOpacity>
    </View>
  );

  const masterInfo: KBHHistory<null> = {
    CompanyCode: params.userLotSelection.companyCode
      ? params.userLotSelection.companyCode.trim()
      : '',
    ProjectCode: params.userLotSelection.projectCode
      ? params.userLotSelection.projectCode.trim()
      : '',
    Tract: params.userLotSelection.tract
      ? params.userLotSelection.tract.trim()
      : '',
    Lot: params.userLotSelection.lot ? params.userLotSelection.lot.trim() : '',
    LotSelectType: LotSelectType.photos,
    UploadDate: new Date(),
    UploadBy: userName,
    Address: params.userLotSelection.selectedLotData?.address
      ? params.userLotSelection.selectedLotData?.address.trim()
      : '',
    Id: 0,
  };

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
        if (permission) {
          const result = await PermissionsAndroid.request(permission);
          if (result === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Storage permission granted');
            return true;
          } else {
            console.log('Storage permission denied');
            Alert.alert(
              'Permission Denied',
              'Storage permission is required to save photos.',
            );
          }
          return false;
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    // iOS doesn't require explicit permission request for saving photos
    return true;
  };

  const saveImagesToGallery = async (images: string[]) => {
    try {
      for (const image of images) {
        const fileName = image.split('/').pop();
        if (fileName) {
          const newPath = `${RNFS.PicturesDirectoryPath}/KbHomes${fileName}`;
          await RNFS.copyFile(image, newPath);
        }
      }
    } catch (error) {
      console.error('Error saving images to gallery:', error);
    }
  };

  const goToStatusScreen = async () => {
    try {
      if (isChecked) {
        const hasPermission = await requestStoragePermission();
        if (hasPermission) {
          await saveImagesToGallery(imageData);
        } else {
          console.log('Storage permission denied');
          return;
        }
      }

      const db = await getDBConnection(); // Get the database connection

      // Insert master info and get the historyId
      const historyId = await saveKBHHistory(db, masterInfo);

      // Update child info with the new historyId
      await updateBTImageData(db, historyId);

      // Fetch the updated data from the database
      const updatedData = await getBTHistoryAndImagesDataWithHistoryId(
        db,
        historyId,
      );

      if (updatedData) {
        const contentStatusNavProps: ContentStatusNavProps = {
          photoHistory: updatedData,
          lotSelectedType: LotSelectType.photos,
          hasStatusPending: true,
        };
        navigation.navigate('StatusMessage', contentStatusNavProps); // Navigate to status message screen
      }
    } catch (error) {
      console.error('Error during upload photos process:', error);
    }
  };

  return (
    <CustomStatusBar statusBgColor={AppTheme.colors.surface}>
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SafeAreaView style={styles.viewContainer}>
          <Header
            home={false}
            logo={true}
            theme={HeaderTheme.white}
            cancelText={true}
            menu={true}
            cancelIcon={false}
            backIcon={false}
          />
          <Title headerText={LotSelectType.photos} visable={true} />
          <View style={styles.card}>
            <View style={[CommonStyles.card]}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardHeaderOptions}>
                  {selectMode ? 'Select Photos' : 'Review Photos'}
                </Text>
                {selectMode ? (
                  <TouchableOpacity
                    style={styles.clearAllContainer}
                    onPress={() => setSelectMode(false)}
                  >
                    <Text style={styles.clearAllText}>Cancel</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.clearAllContainer}
                    onPress={() => setSelectMode(true)}
                  >
                    <Text style={styles.clearAllText}>Delete Photos</Text>
                  </TouchableOpacity>
                )}
              </View>

              <FlatList
                data={imageData}
                renderItem={renderImage}
                keyExtractor={(_item, index) => index.toString()}
                numColumns={2}
                style={{ alignContent: 'center', alignSelf: 'center' }}
              />
              <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                {renderModalContent()}
              </Modal>

              {!selectMode && (
                <View style={styles.saveToCustomerConatiner}>
                  {isChecked ? (
                    <TouchableOpacity onPress={handleCheckboxToggle}>
                      <PHOTOS_PREVIEW_SQUARE_CHECKED_ICON />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={handleCheckboxToggle}>
                      <PHOTOS_PREVIEW_SQUARE_ICON />
                    </TouchableOpacity>
                  )}
                  <Text style={styles.saveToCustomer}>
                    Save to customer folder
                  </Text>
                </View>
              )}
              {showAlert && (
                <CustomAlert
                  title='Confirmation'
                  message='Are you sure you want to delete these photos ?'
                  onCancel={handleDeleteCancel}
                  onContinue={handleDelete}
                  isVisible={false}
                />
              )}
              {selectMode && (
                <View
                  style={[
                    styles.deletebutton,
                    { opacity: selectedPhotos.length > 0 ? 1 : 0.5 },
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => {
                      if (selectedPhotos.length > 0) {
                        setShowAlert(true);
                      }
                    }}
                    disabled={!selectedPhotos.length}
                  >
                    {selectedPhotos.length > 0 ? (
                      <Text style={[styles.sendMessageStyle]}>
                        Delete {selectedPhotos.length}{' '}
                        {selectedPhotos.length > 1 ? 'Photos' : 'Photo'}
                      </Text>
                    ) : (
                      <Text style={[styles.sendMessageStyle]}>Delete</Text>
                    )}
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          {!selectMode && (
            <View style={[styles.sendMessageView, CommonStyles.buttonCard]}>
              <TouchableOpacity
                style={styles.button}
                onPress={goToStatusScreen}
              >
                <Text style={styles.sendMessageStyle}>Upload Photos</Text>
              </TouchableOpacity>
            </View>
          )}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </CustomStatusBar>
  );
};

export default Review;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    backgroundColor: AppTheme.colors.white_smoke,
  },
  card: {
    marginTop: 15,
    marginBottom: '100%',
    backgroundColor: AppTheme.colors.white_smoke,
  },
  cardHeader: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeaderOptions: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
  },
  clearAllContainer: {
    right: 0,
    zIndex: 1,
  },
  clearAllText: {
    color: AppTheme.colors.link_color,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  saveToCustomerConatiner: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveToCustomer: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '500',
    letterSpacing: 0.25,
    color: AppTheme.colors.black,
    marginLeft: 10,
  },
  deletebutton: {
    backgroundColor: AppTheme.colors.primary,
    width: '93%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 16,
  },
  sendMessageStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
    alignSelf: 'center',
  },
  disabledTextStyle: {
    color: 'gray',
  },
  sendMessageView: {
    height: 85,
    width: '100%',
  },
  button: {
    margin: '5%',
    backgroundColor: AppTheme.colors.primary,
    padding: '3%',
    borderRadius: 5,
    marginTop: 15,
    height: 47,
  },

  imageView: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    justifyContent: 'space-between',
  },
  image: {
    width: 165,
    height: 160,
    marginVertical: 7,
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: AppTheme.colors.camera_view_second_portion,
    height: '70%',
    width: '95%',
    alignItems: 'center',
    paddingTop: '30%',
    paddingBottom: '30%',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  modalCloseButton: {
    marginTop: 5,
    alignSelf: 'center',
    color: AppTheme.colors.surface,
  },
});
