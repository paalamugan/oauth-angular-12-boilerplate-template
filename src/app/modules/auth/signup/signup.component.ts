import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth/auth.service';
import { SessionService } from '@app/shared/services/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  state: any = {
    username: '',
    email: '',
    password: '',
  };
  constructor(
    private auth: AuthService,
    private session: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth.signup(this.state).subscribe((data) => {
      this.session.setSession(data);
      this.router.navigateByUrl('/dashboard');
    });
  }

  goBack() {
    this.router.navigateByUrl('/login');
  }
}
