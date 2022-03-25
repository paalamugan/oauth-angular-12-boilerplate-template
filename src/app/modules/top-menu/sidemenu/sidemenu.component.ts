import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { find } from 'lodash';
import { menus } from '@app/common/sidemenu';
import { MenuElement } from '@app/models/menu-element';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})

export class SidemenuComponent implements OnInit {
  @Input() iconOnly: boolean = false;
  menus!: MenuElement[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.menus = [...menus];
    this.getMenus(this.menus);
  }

  isActiveRoute(link: any) {
    if (typeof link !== 'string') {
      return false;
    }
    return this.router.url.includes(link);
  }

  isActiveSubMenu(menu: MenuElement) {
    if (typeof menu.link === 'string') {
      return this.isActiveRoute(menu.link);
    }

    return !!find(menu.sub, (subMenu) => this.isActiveRoute(subMenu.link));
  }

  getMenus(menus: MenuElement[], menu?: MenuElement) {
    let previousMenu = menu || ({} as MenuElement);
    
    menus.forEach((menu: any) => {
      if (menu?.sub?.length) {
        menu.open = !!this.isActiveSubMenu(menu);
        previousMenu = this.getMenus(menu.sub, menu);
        menu.open = previousMenu.open || menu.open;
      }
    });
    
    return previousMenu;
  }
}

