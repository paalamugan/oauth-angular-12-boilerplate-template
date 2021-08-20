export interface Chip {
  value: number;
  color: string;
}

export interface Menu {
  name: string;
  open?: boolean;
  chip?: boolean | Chip;
  link?: string | boolean;
  tooltip?: string;
  sub?: Array<MenuElement>;
}

export interface MenuWithIcon extends Menu {
  icon: string;
}

export interface MenuWithSVGIcon extends Menu {
  svgIcon: string;
}

export type MenuElement = MenuWithIcon | MenuWithSVGIcon;
