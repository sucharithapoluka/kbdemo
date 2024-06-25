import { UploadNavProps } from "./LotsData";
import { MessageNavProps } from "./MessageNavProps";

export type RootStackParamList = {
    Home: undefined;
    Menu: undefined;
    CreateMessage: MessageNavProps;
    EditMessage: MessageNavProps;
    AppAcknowledgement: undefined;
    DashboardLayout: UploadNavProps;
};
