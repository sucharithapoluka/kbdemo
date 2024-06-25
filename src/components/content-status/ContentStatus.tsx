import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  LogBox,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  PENDING_STATUS_ICON,
  STATUS_COMPLETE_ICON,
  STATUS_FAILED_ICON,
} from '@assets/Svgs';
import { KBHBuildTrackerImage } from '@models/db/KBHBuildTrackerImage';
import { LotSelectType, SyncStatus } from '@models/Enums';
import { CommonStyles } from '@styles/App';
import { AppTheme } from '@styles/AppTheme';

import { ContentStatusNavProps } from './ContentStatusNavProps';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function Status() {
  const messageData =
    'Your message will be sent in the background when you have a network connection and the system is able to send it.';
  const photoData =
    'Your upload will occur in the background when you have a network connection and the system is able to send it.';
  const route = useRoute();
  const props = route.params as ContentStatusNavProps;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    ImageSourcePropType | undefined
  >();

  const images = props.photoHistory?.data?.map(
    (image: KBHBuildTrackerImage) => `file://${image.ImagePath}`,
  );

  const openModal = (index: number) => {
    if (
      props.photoHistory &&
      props.photoHistory.data &&
      props.photoHistory.data[index]?.ImagePath
    ) {
      const imagePath = `file://${props.photoHistory.data[index]?.ImagePath}`;
      setSelectedImage({ uri: imagePath });
    }
    setModalVisible(true);
  };

  const renderModalContent = () => (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Image source={selectedImage} style={styles.imagePreview} />
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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.bodyContainer, CommonStyles.card]}>
        {props.photoHistory?.data?.some(
          image => image.SyncStatus == SyncStatus.pending,
        ) && (
          <View style={styles.statusContainer}>
            <View style={styles.statusMargin}>
              <View style={styles.statusFlex}>
                <PENDING_STATUS_ICON />
                {props.lotSelectedType == LotSelectType.messages ? (
                  <Text style={styles.statusText}>Message Pending</Text>
                ) : (
                  <Text style={styles.statusText}>Upload Pending</Text>
                )}
              </View>
              {props.lotSelectedType == LotSelectType.messages ? (
                <Text style={styles.textData}>{messageData}</Text>
              ) : (
                <Text style={styles.textData}>{photoData}</Text>
              )}
            </View>
          </View>
        )}

        {props.photoHistory?.data?.some(
          image => image.SyncStatus == SyncStatus.completed,
        ) && (
          <>
            <View style={styles.uploadStatus}>
              {props.lotSelectedType == LotSelectType.messages ? (
                <Text style={styles.uploadText}>Message Status</Text>
              ) : (
                <Text style={styles.uploadText}>Upload Status</Text>
              )}
              <View style={styles.uploadViewWidth}>
                <STATUS_COMPLETE_ICON />
                <Text style={styles.completeText}>Complete</Text>
              </View>
            </View>
            <View style={styles.statusShadowLineView}>
              <View style={styles.statusShadowLine} />
            </View>
          </>
        )}

        {props.photoHistory?.data?.some(
          image => image.SyncStatus == SyncStatus.failed,
        ) && (
          <>
            <View style={styles.uploadStatus}>
              {props.lotSelectedType == LotSelectType.messages ? (
                <Text style={styles.uploadText}>Message Status</Text>
              ) : (
                <Text style={styles.uploadText}>Upload Status</Text>
              )}
              <View style={styles.faliedViewWidth}>
                <STATUS_FAILED_ICON />
                <Text style={styles.failedText}>Failed</Text>
              </View>
            </View>
            <View style={styles.statusShadowLineView}>
              <View style={styles.statusShadowLine} />
            </View>
          </>
        )}

        <View style={styles.statusMargin}>
          {props.photoHistory?.data?.some(
            image => image.SyncStatus == SyncStatus.pending,
          ) && (
            <View style={styles.statusFlex}>
              <View style={styles.columnFlex}>
                {props.lotSelectedType == LotSelectType.messages ? (
                  <Text style={styles.statusDate}>Send Date:</Text>
                ) : (
                  <Text style={styles.statusDate}>Upload Date:</Text>
                )}
              </View>
              <View style={styles.columnFlex}>
                <Text style={styles.dateText}>
                  <Text style={styles.dateText}>
                    {new Date(props.photoHistory.UploadDate).toLocaleDateString(
                      'en-US',
                      {
                        month: '2-digit',
                        day: '2-digit',
                        year: 'numeric',
                      },
                    )}
                  </Text>
                </Text>
              </View>
            </View>
          )}

          {(props.photoHistory?.data?.some(
            image => image.SyncStatus == SyncStatus.completed,
          ) ||
            props.photoHistory?.data?.some(
              image => image.SyncStatus == SyncStatus.failed,
            )) && (
            <>
              <View style={[styles.statusFlex, { marginTop: 8 }]}>
                <View style={styles.columnFlex}>
                  <Text style={styles.statusDate}>Date:</Text>
                </View>
                <View style={styles.columnFlex}>
                  <Text style={styles.dateText}>
                    <Text style={styles.dateText}>
                      {new Date(
                        props.photoHistory.UploadDate,
                      ).toLocaleDateString('en-US', {
                        month: '2-digit',
                        day: '2-digit',
                        year: 'numeric',
                      })}
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.statusFlex}>
                <View style={styles.columnFlex}>
                  <Text style={styles.statusDate}>Time:</Text>
                </View>
                <View style={styles.columnFlex}>
                  <Text style={styles.dateText}>9:41 AM</Text>
                </View>
              </View>
            </>
          )}

          <View style={styles.shadowLine} />
          <View style={styles.statusFlex}>
            <View style={styles.columnFlex}>
              <Text style={styles.statusDate}>Company:</Text>
            </View>
            <View style={styles.columnFlex}>
              <Text style={styles.dateText}>
                {props.photoHistory.CompanyCode}
              </Text>
            </View>
          </View>

          <View style={styles.statusFlex}>
            <View style={styles.columnFlex}>
              <Text style={styles.statusDate}>Project:</Text>
            </View>
            <View style={styles.columnFlex}>
              <Text style={styles.dateText}>
                {props.photoHistory.ProjectCode}
              </Text>
            </View>
          </View>

          <View style={styles.statusFlex}>
            <View style={styles.columnFlex}>
              <Text style={styles.statusDate}>Tract:</Text>
            </View>
            <View style={styles.columnFlex}>
              <Text style={styles.dateText}>{props.photoHistory.Tract}</Text>
            </View>
          </View>

          <View style={styles.statusFlex}>
            <View style={styles.columnFlex}>
              <Text style={styles.statusDate}>Lot:</Text>
            </View>
            <View style={styles.columnFlex}>
              <Text style={styles.dateText}>{props.photoHistory.Lot}</Text>
            </View>
          </View>
          <View style={styles.shadowLine} />

          <View style={styles.statusFlex}>
            <View style={styles.columnFlex}>
              <Text style={styles.statusDate}>Address:</Text>
            </View>
            <View style={styles.columnFlex}>
              <Text style={styles.dateText}>{props.photoHistory.Address}</Text>
            </View>
          </View>
          {props.photoHistory?.data?.some(
            image => image.SyncStatus == SyncStatus.pending,
          ) && props.lotSelectedType == LotSelectType.photos ? (
            ''
          ) : (
            <View style={styles.shadowLine} />
          )}

          {props.lotSelectedType == LotSelectType.messages ? (
            <>
              <Text style={styles.messageText}>Message:</Text>
              <View style={styles.iconStyleQuote}>
                <FontAwesome5
                  name='quote-left'
                  size={15}
                  color={AppTheme.colors.primary}
                />
              </View>
              <View style={styles.messageTextView}>
                <View style={styles.textStyleView}>
                  {/* <Text style={styles.subject}>{props.history.subject}</Text> */}
                  {/* <Text style={styles.textStyle}>{props.history.message}</Text> */}
                </View>
              </View>
            </>
          ) : (
            props.photoHistory?.data?.some(
              image => image.SyncStatus == SyncStatus.pending,
            ) && (
              <>
                <Text style={styles.messageText}>Photos:</Text>
                <View>
                  <FlatList
                    scrollEnabled={false}
                    data={images}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => openModal(index)}
                        style={styles.imageView}
                      >
                        <Image source={{ uri: item }} style={styles.image} />
                      </TouchableOpacity>
                    )}
                    numColumns={2}
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
                </View>
              </>
            )
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    margin: 15,
    backgroundColor: AppTheme.colors.surface,
    height: 'auto',
    marginBottom: '25%',
  },
  statusContainer: {
    margin: 15,
    backgroundColor: AppTheme.colors.pending_status_background_color,
  },
  statusMargin: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  statusFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  statusText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
    marginLeft: 10,
    marginTop: 2,
  },
  textData: {
    fontSize: 14,
    color: AppTheme.colors.black,
    lineHeight: 22,
  },
  columnFlex: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  uploadStatus: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
  },
  uploadViewWidth: {
    flexDirection: 'row',
    backgroundColor: AppTheme.colors.completed_status_icon_color,
    width: '40%',
    borderRadius: 5,
    alignItems: 'center',
  },
  faliedViewWidth: {
    flexDirection: 'row',
    backgroundColor: AppTheme.colors.failed_status_icon_color,
    width: '30%',
    borderRadius: 5,
    alignItems: 'center',
  },
  iconStyle: {
    marginLeft: 10,
  },
  completeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: AppTheme.colors.complete_status_text_color,
    marginLeft: 3,
    marginTop: 2,
  },
  failedText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppTheme.colors.failed_status_background_color,
    marginLeft: 1,
    marginTop: 2,
  },

  statusDate: {
    fontSize: 17,
    fontWeight: '500',
    color: AppTheme.colors.black,
  },
  dateText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppTheme.colors.black,
    lineHeight: 22,
  },

  shadowLine: {
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  statusShadowLineView: {
    marginHorizontal: 15,
  },
  statusShadowLine: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  iconStyleQuote: {
    marginLeft: 15,
  },
  messageTextView: {
    marginLeft: 40,
    paddingLeft: 15,
    borderLeftWidth: 2.5,
    borderColor: AppTheme.colors.primary,
    borderStyle: 'solid',
    height: 'auto',
    marginBottom: 15,
  },
  textStyleView: {
    marginBottom: 15,
    marginRight: 10,
  },
  subject: {
    fontSize: 18,
    fontWeight: '400',
    color: AppTheme.colors.black,
    marginBottom: 15,
    lineHeight: 25,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: AppTheme.colors.black,
    lineHeight: 25,
  },
  messageText: {
    fontSize: 15,
    fontWeight: '500',
    color: AppTheme.colors.black,
    marginBottom: 15,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageView: {
    padding: 5,
    flexDirection: 'row',
    width: '50%',
  },
  image: {
    width: '100%',
    height: 130,
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  row: {
    flex: 1,
    marginVertical: 5,
    marginBottom: 5, // Adjust as needed
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#D6D6D6',
    height: '60%',
    width: '95%',
    alignItems: 'center',
    marginTop: '25%',
    paddingTop: '25%',
    paddingBottom: '25%',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  modalCloseButton: {
    marginTop: 8,
    alignSelf: 'center',
    color: AppTheme.colors.surface,
  },
});
