import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth/auth.service';
import { SessionService } from '@app/shared/services/session.service';

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

  constructor(
    private auth: AuthService,
    private session: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth.login(this.state).subscribe((data) => {
      this.session.setSession(data);
      this.router.navigateByUrl('/dashboard');
    });
  }

  oAuthLogin() {}
}
