export type TabProps = {
  label: string;
  onPress: (selectedTab: string) => void;
};

export type TabsProps = {
  defualtTab: string;
  tabs: TabProps[];
};
