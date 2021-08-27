import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth/auth.service';
import { SessionService } from '@app/shared/services/session.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  isOpen: boolean = false;
  currentUser: any | undefined;
  avatar: string | undefined;
  name: string = 'No name';
  profileURL: string | undefined = '/profile';

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private auth: AuthService,
    private session: SessionService
  ) {}

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) return;

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  ngOnInit() {
    this.session.getSession().subscribe((data: any) => {
      this.currentUser = data?.user || null;
    });
  }

  nagivateurl() {
    this.router.navigate([this.profileURL]);
    this.isOpen = false;
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.session.clearSession();
      this.router.navigateByUrl('/login');
    });
  }
}
