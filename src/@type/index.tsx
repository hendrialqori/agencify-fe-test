export type Menu = {
    key?: string
    title: string;
    submenu?: Submenu[];
    isActive?: boolean
}

export type Submenu = {
    icon: React.ReactNode,
    title: string;
    subtitle: string
    badge?: string
}