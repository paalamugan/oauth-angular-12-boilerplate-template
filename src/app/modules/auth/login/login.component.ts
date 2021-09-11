import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '@app/core/services/auth/auth.service';
import { SessionService } from '@app/shared/services/session.service';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { indicateLoading } from '@app/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  state = {
    email: '',
    password: '',
  };
  loading$ = new Subject<boolean>();
  loading: boolean = false;

  // If set { static: true }, You can get email dom element When ngOnInit function calls itself.
  @ViewChild('email', { static: true }) emailElement!: ElementRef;
  @ViewChild('password', { static: true }) passwordElement!: ElementRef;

  constructor(
    private auth: AuthService,
    private session: SessionService,
    private router: Router,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.auth
      .login(this.state)
      .pipe(indicateLoading(this.loading$))
      .subscribe((data) => {
        this.session.setSession(data);
        this.router.navigateByUrl('/dashboard');
      });
  }

  oAuthLogin() {
    this.snackbar.info('Currently not supported!');
  }
}
