import { StyleSheet, Platform } from 'react-native';
import { AppTheme } from './AppTheme';

export const CommonStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: AppTheme.colors.white_smoke
    },
    text: {
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: AppTheme.colors.black,
    },
    secondaryText: {
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'gray',
    },
    spacerStyle: {
        marginBottom: 15,
    },
    safeContainerStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    signOutSafeContainerStyle: {
        flex: 1,
        margin: 20,
        justifyContent: 'flex-end',
    },
    emptySafeAreaView: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: AppTheme.colors.primary,
    },
    card: {
        backgroundColor: AppTheme.colors.surface,
        marginHorizontal: 15,
        ...Platform.select({
            ios: {
                shadowColor: AppTheme.colors.black,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 1,
            },
            android: {
                elevation: 2,
            },
        }),
    },
    buttonCard: {
        backgroundColor: AppTheme.colors.surface,
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 12,
        ...Platform.select({
            ios: {
                shadowColor: AppTheme.colors.black,
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                shadowColor: AppTheme.colors.black,
                elevation: 10,
                overflow: 'visible'
            },
        }),
    }
});
