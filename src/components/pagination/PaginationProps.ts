import { Animated } from 'react-native';

import { SliderProps } from '@components/onboarding-slider/SliderProps';

export type PaginationProps = {
  data: SliderProps[];
  scrollX: Animated.Value;
  index: number;
  onDotPress: (number: number) => void;
};
