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
    tooltip: 'DashBoard',
  },
  {
    name: 'Nav Link 1',
    svgIcon: 'session',
    link: '/nav-link-1',
    // 'chip': { 'value': 1, 'color': 'accent' },
    tooltip: 'Nav Link 1',
  },
  // {
  //   name: 'Nav Link 2',
  //   icon: 'session',
  //   link: false,
  //   open: false,
  //   sub: [
  //     {
  //       name: 'Buttons',
  //       link: 'nav-link2/buttons',
  //       icon: 'indeterminate_check_box',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'List',
  //       link: 'nav-link2/list',
  //       icon: 'list',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'Stepper',
  //       link: 'nav-link2/stepper',
  //       icon: 'view_week',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'Expansion',
  //       link: 'nav-link2/expansion',
  //       icon: 'web_aaset',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'Progress Spinner',
  //       link: 'nav-link2/spinner',
  //       icon: 'cached',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'Cards',
  //       link: 'nav-link2/cards',
  //       icon: 'crop_16_9',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'Icons',
  //       link: 'nav-link2/icons',
  //       icon: 'gif',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'AutoComplete',
  //       link: 'nav-link2/autocomplete',
  //       icon: 'get_app',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'CheckBox',
  //       link: 'nav-link2/checkbox',
  //       icon: 'check_box',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'DatePicker',
  //       link: 'nav-link2/datepicker',
  //       icon: 'date_range',
  //       chip: false,
  //       open: false,
  //     },

  //     {
  //       name: 'Slider',
  //       link: 'nav-link2/slider',
  //       icon: 'keyboard_tab',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'Slide Toggle',
  //       link: 'nav-link2/slide-toggle',
  //       icon: 'album',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'Menu',
  //       icon: 'menu',
  //       link: 'nav-link2/menu',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'Progress Bar',
  //       link: 'nav-link2/progress-bar',
  //       icon: 'trending_flat',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'Input',
  //       icon: 'input',
  //       link: 'nav-link2/input',
  //       open: false,
  //     },
  //     {
  //       name: 'Radio',
  //       icon: 'radio_button_checked',
  //       link: 'nav-link2/radio',
  //       chip: false,
  //       open: false,
  //     },
  //     {
  //       name: 'Select',
  //       icon: 'select_all',
  //       link: 'nav-link2/select',
  //       open: false,
  //     },
  //   ],
  // },

  // {
  //   name: 'Tables',
  //   icon: 'list',
  //   link: false,
  //   open: false,
  //   chip: { value: 2, color: 'accent' },
  //   sub: [
  //     {
  //       name: 'Fixed',
  //       icon: 'filter_list',
  //       link: 'tables/fixed',
  //       open: false,
  //     },
  //     {
  //       name: 'Feature',
  //       icon: 'done_all',
  //       link: 'tables/featured',
  //       open: false,
  //     },
  //     {
  //       name: 'Responsive Tables',
  //       icon: 'filter_center_focus',
  //       link: 'tables/responsive',
  //       open: false,
  //     },
  //   ],
  // },
  // {
  //   name: 'Guarded Routes',
  //   icon: 'mode_edit',
  //   link: '/guarded-routes',
  //   open: false,
  // },
  // {
  //   name: 'Scrumboard',
  //   open: false,
  //   link: '/scrumboard',
  //   icon: 'grade',
  // },
  // {
  //   name: 'Applications',
  //   icon: 'view_module',
  //   open: false,
  //   link: false,
  //   sub: [
  //     {
  //       name: 'chat',
  //       icon: 'chat',
  //       link: 'chats/chat',
  //       open: false,
  //     },
  //     {
  //       name: 'mail',
  //       icon: 'mail',
  //       link: 'mail/mail',
  //       open: false,
  //     },
  //     {
  //       name: 'Editor',
  //       icon: 'editor',
  //       link: 'editor/editor',
  //       open: false,
  //     },
  //   ],
  // },
  // {
  //   name: 'Pages',
  //   icon: 'content_copy',
  //   open: false,
  //   link: false,
  //   sub: [
  //     {
  //       name: 'Login',
  //       icon: 'work',
  //       open: false,
  //       link: '../login',
  //     },
  //     {
  //       name: 'Services',
  //       icon: 'local_laundry_service',
  //       open: false,
  //       link: 'pages/services',
  //     },
  //     {
  //       name: 'Contact',
  //       icon: 'directions',
  //       open: false,
  //       link: 'pages/contact',
  //     },
  //   ],
  // },
  // {
  //   name: 'Charts',
  //   icon: 'pie_chart_outlined',
  //   open: false,
  //   link: false,
  //   sub: [
  //     {
  //       name: 'chartjs',
  //       icon: 'view_list',
  //       link: 'charts/chartjs',
  //       open: false,
  //     },
  //     {
  //       name: 'ngx-chart',
  //       icon: 'show_chart',
  //       open: false,
  //       link: 'charts/ngx-charts',
  //     },
  //     {
  //       name: 'nvd3',
  //       icon: 'pie_chart',
  //       open: false,
  //       link: 'charts/nvd3-charts',
  //     },
  //   ],
  // },
  // {
  //   name: 'maps',
  //   icon: 'map',
  //   open: false,
  //   link: false,
  //   sub: [
  //     {
  //       name: 'google-map',
  //       icon: 'directions',
  //       link: 'maps/googlemap',
  //       open: false,
  //     },
  //     {
  //       name: 'leaflet-map',
  //       icon: 'directions',
  //       link: 'maps/leafletmap',
  //       open: false,
  //     },
  //   ],
  // },
];
