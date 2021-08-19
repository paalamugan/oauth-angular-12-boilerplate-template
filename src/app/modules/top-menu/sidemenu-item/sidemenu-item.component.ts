import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidemenu-item',
  templateUrl: './sidemenu-item.component.html',
  styleUrls: ['./sidemenu-item.component.scss']
})
export class SidemenuItemComponent implements OnInit {
  @Input() menu: any;
  @Input() iconOnly: boolean | undefined;
  @Input() secondaryMenu = false;

  constructor() { }

  ngOnInit() {}

  openLink() {
    this.menu.open = this.menu.open;
  }

  chechForChildMenu() {
    return (this.menu && this.menu.sub) ? true : false;
  }

}
