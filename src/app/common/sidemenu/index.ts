import { MenuElement } from '@app/models/menu-element';

/**
 * @important
 *  link: must be start with forward slash with full path of that router.
 *  No need to mention false value in that link property.
 *
 *  use either icon nor svgIcon.
 */

export const menus: MenuElement[] = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard',
    // 'chip': { 'value': 1, 'color': 'accent' },
    tooltip: 'DashBoard',
  },
  {
    name: 'Nav Link 1',
    svgIcon: 'session',
    tooltip: 'Nav Link 1',
    open: false,
    sub: [
      {
        name: 'Sub Link 1',
        icon: 'list',
        link: '/nav-link-1/sub-link-1',
        tooltip: 'Nav Sub Link 1',
      },
      {
        name: 'Sub Link 2',
        icon: 'line_weight',
        link: '/nav-link-1/sub-link-2',
        tooltip: 'Nav Sub Link 2',
      },
      {
        name: 'Sub Link 3',
        icon: 'line_style',
        link: '/nav-link-1/sub-link-3',
        tooltip: 'Sub Link 3',
      },
    ],
  },
];
