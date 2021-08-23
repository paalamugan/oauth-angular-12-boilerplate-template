<!-- const routes: Routes = [
  {
    path: 'page1/:pageOneID',
    component: PageComponent,
    data: {
      title: 'page1',
      breadcrumb: [
        {
          label: 'Page1',
          url: ''
        }
      ]
    },
  },
  {
    path: 'page1/:pageOneID/page2/:pageTwoID',
    component: Page2Component,
    data: {
      title: 'page2', 
      breadcrumb: [
        {
          label: 'page {{pageOneID}}',// pageOneID Parameter value will be add 
          url: '/page1/:pageOneID'
        },
        {
          label: 'page {{pageTwoID}}',// pageTwoID Parameter value will be add 
          url: ''
        }
      ]
    },
  },
  {
    path: 'page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID',
    component: Page3Component,
    data: {
      title: 'page3',
      breadcrumb: [
        {
          label: 'page1',
          url: '/page1/:pageOneID'
        },
        {
          label: '{{dynamicText}} page', // If "dynamicText" is not parameter , should be set value  using MatBreadcrumbService, More info please check the 5th point.
          url: 'page1/:pageOneID/page2/:pageTwoID'
        },
        {
          label: '{{customText}}', // If "customText" is not parameter , should be set value  using MatBreadcrumbService, More info please check the 5th point.
          url: ''
        }
      ]
    },
  },
]; -->
