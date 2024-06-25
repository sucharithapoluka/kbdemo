import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { AppTheme } from '../../styles/AppTheme';
import { ScreenDimensions } from '../../constants/AppConstants';
import { OnboardingSliderData } from '../../models/OnboardingSliderData';

const SliderItem = ({ item }: { item: OnboardingSliderData }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.image} resizeMode='cover' />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};

export default SliderItem;

const styles = StyleSheet.create({
    container: {
        width: ScreenDimensions.width,
        height: ScreenDimensions.height,
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        aspectRatio: 0.50,
        borderWidth: 8,
        borderRadius: 20,
        borderColor: AppTheme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
    },
    content: {
        flex: 0.4,
        alignItems: 'center',
        marginBottom: '30%',
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: AppTheme.colors.black,
    },
    description: {
        fontSize: 15,
        marginVertical: 12,
        color: AppTheme.colors.black,
        marginLeft: 50,
        marginRight: 50,
        textAlign: 'center'
    }
});

