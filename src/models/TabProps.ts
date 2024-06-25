export type TabProps = {
    label: string;
    onPress: (selectedTab: string) => void;
}

export type TabsComponentProps = {
    defualtTab: string;
    tabs: TabProps[]
}