import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';
@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent implements OnInit {
  isFullscreen: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleFullscreen() {
    if (screenfull?.isEnabled) {
        screenfull?.toggle?.();
        this.isFullscreen = !this.isFullscreen;
    }
  }

}
