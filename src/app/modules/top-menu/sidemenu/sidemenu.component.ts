import { Component, OnInit, Input } from '@angular/core';
import { menus } from '@app/common/sidemenu';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  @Input() iconOnly: boolean = false;
  menus: any;
  constructor() {}

  ngOnInit() {
    this.menus = menus;
  }
}
