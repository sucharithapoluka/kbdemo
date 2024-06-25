export type HeaderProps = {
    home: boolean | undefined;
    logo: boolean | undefined;
    cancelText: boolean | undefined;
    theme: HeaderTheme | undefined;
    menu: boolean | undefined;
    cancelIcon: boolean | undefined;
}

export enum HeaderTheme {
    transparent,
    white
}