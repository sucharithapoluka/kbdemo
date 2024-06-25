export type DropdownProps = {
    label: string;
    value: string | null;
    placeholder: string;
    enableSearch: boolean;
    data: Array<{ label: string; value: string }> | null;
    onSelect: (item: { label: string; value: string }) => void;
}