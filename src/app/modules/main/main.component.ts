import { Component, OnInit, Input } from '@angular/core';
import { MediaChange, MediaObserver  } from '@angular/flex-layout';
import { AuthService } from '@app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() isVisible : boolean = true;
  visibility: string = 'shown';
  
  sidenav: any = '';
  userCompanyname:string='';
  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: any = 'side';
  drawerMode: string = 'side';
  isLoading: boolean = false;
  $media: Observable<MediaChange[]>;

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

	constructor(private media: MediaObserver, private auth: AuthService) {
    this.$media = media.asObservable();
  }

	ngOnInit() {          
    this.$media.subscribe(() => {
      this.toggleView();
    });
	}

  getRouteAnimation(outlet: { activatedRouteData: { animation: any; }; }) {
    return outlet.activatedRouteData.animation;
    //return outlet.isActivated ? outlet.activatedRoute : ''
  }

	toggleView() {
		if (this.media.isActive('gt-md')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
      this.matDrawerOpened = false;
      this.matDrawerShow = true;
    } else if(this.media.isActive('gt-xs')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = false;
      this.matDrawerOpened = true;
      this.matDrawerShow = true;
    } else if (this.media.isActive('lt-sm')) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
      this.matDrawerOpened = false;
      this.matDrawerShow = false;
    }
	}



}
