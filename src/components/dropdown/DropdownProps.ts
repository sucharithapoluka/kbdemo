export type DropdownProps = {
  label: string;
  value: string | null;
  placeholder: string;
  enableSearch: boolean;
  data: DropdownItemProps[] | null;
  onSelect: (item: { label: string; value: string }) => void;
};

export type DropdownItemProps = {
  label: string;
  value: string;
};
