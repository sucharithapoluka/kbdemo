import { HeaderTheme } from '@models/Enums';

export type HeaderProps = {
  home: boolean | undefined;
  logo: boolean | undefined;
  cancelText: boolean | undefined;
  theme: HeaderTheme | undefined;
  menu: boolean | undefined;
  cancelIcon: boolean | undefined;
  backIcon: boolean | undefined;
};
