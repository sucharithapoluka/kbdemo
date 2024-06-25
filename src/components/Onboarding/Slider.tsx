import { FlatList, Animated, ViewToken, ListRenderItemInfo, SafeAreaView } from 'react-native'
import React, { useRef, useState } from 'react'
import SliderItem from './SliderItem'
import Pagination from '../Pagination'
import { OnBordingSlides } from '../../constants/AppConstants'
import { OnboardingSliderData } from '../../models/OnboardingSliderData'

type OnScrollEvent = {
    nativeEvent: {
        contentOffset: {
            x: number;
            y: number;
        };
        contentSize: {
            width: number;
            height: number;
        };
        layoutMeasurement: {
            width: number;
            height: number;
        };
    };
};

type ViewabilityInfo = {
    viewableItems: ViewToken[];
    changed: ViewToken[];
};

const Slider = () => {

    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList>(null); // Ref for FlatList

    const handleOnScroll = (event: OnScrollEvent) => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX
                    }
                }
            }
        ],
            {
                useNativeDriver: false
            }
        )(event);
    }

    const handleOnViewableItemsChanged = useRef((info: ViewabilityInfo) => {
        // Check if the first viewable item has a non-null index
        if (info.viewableItems.length > 0 && info.viewableItems[0] && info.viewableItems[0].index != null) {
            setIndex(info.viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    const handleDotPress = (idx: number) => {
        // Scroll to the corresponding slide when a dot is pressed
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ animated: true, index: idx });
        }
    }

    return (
        <SafeAreaView >
            <FlatList
                ref={flatListRef} // Assign the ref
                data={OnBordingSlides}
                renderItem={(slideItm: ListRenderItemInfo<OnboardingSliderData>) => <SliderItem item={slideItm.item} />}
                horizontal
                pagingEnabled
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            <Pagination
                data={OnBordingSlides}
                scrollX={scrollX}
                index={index}
                onDotPress={handleDotPress}
            />
        </SafeAreaView>
    )
}

export default Slider
