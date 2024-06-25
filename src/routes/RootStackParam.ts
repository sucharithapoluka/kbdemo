import { ContentStatusNavProps } from '@components/content-status/ContentStatusNavProps';
import { DashboardLayoutNavProps } from '@screens/dashboard-layout/DashboardLayoutNavProps';
import { MessageNavProps } from '@screens/messages/MessageNavProps';
import { PhotosNavProps } from '@screens/photos/PhotosNavProps';

export type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  CreateMessage: MessageNavProps;
  EditMessage: MessageNavProps;
  AppAcknowledgement: undefined;
  DashboardLayout: DashboardLayoutNavProps;
  Camera: PhotosNavProps;
  StatusMessage: ContentStatusNavProps;
  PhotosReview: PhotosNavProps;
};
