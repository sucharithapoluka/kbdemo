import { StyleSheet, Animated, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppTheme } from '../styles/AppTheme';
import { PaginationProps } from '../models/PaginationProps';

const Pagination = (paginationPropsdata: PaginationProps) => {

    const { width } = Dimensions.get('screen');

    return (
        <View style={styles.container}>
            {
                paginationPropsdata.data.map((_, idx: number) => {
                    const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

                    const dotWidth = paginationPropsdata.scrollX.interpolate({
                        inputRange,
                        outputRange: [12, 30, 12],
                        extrapolate: 'clamp'
                    })

                    const opacity = paginationPropsdata.scrollX.interpolate({
                        inputRange,
                        outputRange: [0.5, 1, 0.5],
                        extrapolate: 'clamp'
                    })

                    return (
                        <TouchableOpacity
                            key={idx.toString()}
                            onPress={() => paginationPropsdata.onDotPress(idx)}
                            activeOpacity={0.8}
                        >
                            <Animated.View
                                style={[
                                    styles.dot,
                                    { width: dotWidth, opacity },
                                    idx === paginationPropsdata.index && styles.dotActive,
                                ]}
                            />
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 100,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 6,
        backgroundColor: AppTheme.colors.pagination_dots_background,
        marginHorizontal: 3
    },
    dotActive: {
        backgroundColor: AppTheme.colors.black
    }
})
