import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '@app/core/services/auth/auth.service';
import { SessionService } from '@app/shared/services/session.service';
import { indicateLoading } from '@app/contants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  state = {
    username: '',
    password: '',
  };
  loading$ = new Subject<boolean>();

  constructor(
    private auth: AuthService,
    private session: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth.login(this.state).pipe(indicateLoading(this.loading$)).subscribe((data) => {
      this.session.setSession(data);
      this.router.navigateByUrl('/dashboard');
    });
  }

  oAuthLogin() {}
}
