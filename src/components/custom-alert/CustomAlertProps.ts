export type CustomAlertProps = {
  title: string;
  message: string;
  onCancel: () => void;
  onContinue: () => void;
  isVisible: boolean;
};
