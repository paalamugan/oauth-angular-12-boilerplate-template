import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'lodash';
import { menus } from '@app/common/sidemenu';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  @Input() iconOnly: boolean = false;
  menus: any;
  constructor(private router: Router) {}

  ngOnInit() {
    const url = this.router.url;
    this.menus = map(menus, (menu) => {
      let link = menu.name.toLowerCase();
      menu.open = url.includes(link);
      return menu;
    });
  }
}
