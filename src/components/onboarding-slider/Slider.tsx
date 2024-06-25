import React, { useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  View,
  ViewToken,
} from 'react-native';

import CustomStatusBar from '@components/CustomStatusBar';
import Pagination from '@components/pagination/Pagination';
import { ONBOARDING_SLIDES } from '@constants/Common';
import { AppTheme } from '@styles/AppTheme';

import SliderItem from './SliderItem';
import { SliderProps } from './SliderProps';

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
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef((info: ViewabilityInfo) => {
    // Check if the first viewable item has a non-null index
    if (
      info.viewableItems.length > 0 &&
      info.viewableItems[0] &&
      info.viewableItems[0].index != null
    ) {
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
  };

  return (
    <CustomStatusBar>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: AppTheme.colors.white_smoke }}
      >
        <View style={{ flex: 0.95 }}>
          <FlatList
            ref={flatListRef} // Assign the ref
            data={ONBOARDING_SLIDES}
            renderItem={(slideItm: ListRenderItemInfo<SliderProps>) => (
              <SliderItem item={slideItm.item} />
            )}
            horizontal
            pagingEnabled
            snapToAlignment='center'
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            onViewableItemsChanged={handleOnViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
        </View>
        <View style={{ flex: 0.05 }}>
          <Pagination
            data={ONBOARDING_SLIDES}
            scrollX={scrollX}
            index={index}
            onDotPress={handleDotPress}
          />
        </View>
      </SafeAreaView>
    </CustomStatusBar>
  );
};

export default Slider;
