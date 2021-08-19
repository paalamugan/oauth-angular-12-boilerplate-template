export interface Chip {
    value: number, 
    color: string
}

export interface MenuElement {
    name: string,
    icon: string,
    open?: boolean,
    chip?: boolean | Chip,
    link?: string | boolean,
    tooltip?: string, 
    sub?: Array<MenuElement>
}

