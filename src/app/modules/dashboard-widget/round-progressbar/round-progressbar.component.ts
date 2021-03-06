import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-round-progressbar',
  templateUrl: './round-progressbar.component.html',
  styleUrls: ['./round-progressbar.component.scss']
})
export class RoundProgressbarComponent implements OnInit {

    
    @Input() current: any;
    @Input() max: any;
    @Input() background: any;
    @Input() color: any;
    @Input() boxcolor: any;
    @Input() title: any;



    public radius       =    250;
    public stroke       =    "20" ;
    public semicircle   =    false;
    public rounded      =    true;
    public clockwise    =    false;
    public responsive   =    true;
    public duration     =    "800";
    public animation    =    'easeInOutQuart';

    constructor() { }

    ngOnInit() {
    }
    getOverlayStyle() {
        let isSemi = this.semicircle;
        let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

        return {
          'top': isSemi ? 'auto' : '50%',
          'bottom': isSemi ? '5%' : 'auto',
          'left': '50%',
          'transform': transform,
          '-moz-transform': transform,
          '-webkit-transform': transform,
          'font-size': this.radius / 7 + 'px'
        };
    }

}
