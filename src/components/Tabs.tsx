import { StyleSheet, Text, View } from 'react-native'
import { AppTheme } from '../styles/AppTheme';
import { TabProps, TabsComponentProps } from '../models/TabProps';
import { memo, useState } from 'react';

const Tabs = (props: TabsComponentProps) => {

    const [activeTab, setActiveTab] = useState(props.defualtTab);

    // Function to render a tab
    const tab = (tabProps: TabProps) => {
        return tabProps && tabProps.label ? (
            <View style={styles.tab}>
                <Text
                    style={[styles.tabText, activeTab === tabProps.label && styles.activeTabStyle]}
                    onPress={() => {
                        setActiveTab(tabProps.label);
                        tabProps.onPress?.(tabProps.label);
                    }}>
                    {tabProps.label}
                </Text>
                {activeTab === tabProps.label && <View style={styles.underline} />}
            </View>
        ) : null;
    };

    const MemoizedTab = memo(tab);

    return (
        props && props.tabs && Array.isArray(props.tabs) && props.tabs.length > 0 ? (
            <View style={styles.container}>
                {props.tabs.map((tabProps, idx) =>
                (
                    <View style={{ flexDirection: 'row' }} key={idx}>
                        {(idx > 0) && <View style={styles.separator} />}
                        <MemoizedTab {...tabProps} />
                    </View>
                ))}
            </View>
        ) : null
    );
}

export default Tabs

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 15,
        justifyContent: 'center',
        backgroundColor: AppTheme.colors.white_smoke
    },
    tab: {
        marginHorizontal: 10
    },
    tabText: {
        color: AppTheme.colors.black,
        alignSelf: 'center',
    },
    separator: {
        marginTop: 0,
        width: 1,
        backgroundColor: AppTheme.colors.black,
        margin: 5,
    },
    underline: {
        height: 4,
        backgroundColor: AppTheme.colors.primary,
        marginTop: 5, // Adjust this value to position the underline correctly
    },
    activeTabStyle: {
        fontWeight: 'bold'
    },
    verticleLine: {
        marginTop: 5,
        width: 10,
        backgroundColor: AppTheme.colors.black,
    }
})