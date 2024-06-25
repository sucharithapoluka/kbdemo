import { ReactNode } from 'react';

export type CustomStatusBarProps = {
  children: ReactNode;
  statusBgColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  isTranslucent?: boolean;
};
