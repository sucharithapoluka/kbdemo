import { Animated } from "react-native";
import { OnboardingSliderData } from "./OnboardingSliderData";

export type PaginationProps = {
    data: OnboardingSliderData[];
    scrollX: Animated.Value;
    index: number;
    onDotPress: (number: number) => void;
};