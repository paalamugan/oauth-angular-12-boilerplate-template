import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { indicateLoading } from '@app/common';
import { AuthService } from '@app/core/services/auth/auth.service';
import { SessionService } from '@app/shared/services/session.service';
import { Subject } from 'rxjs';

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
  loading$ = new Subject<boolean>();
  loading: boolean = false;

  constructor(private auth: AuthService, private session: SessionService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.auth
      .signup(this.state)
      .pipe(indicateLoading(this.loading$))
      .subscribe((data) => {
        this.session.setSession(data);
        this.router.navigateByUrl('/dashboard');
        this.loading = false;
      });
  }

  goBack() {
    this.router.navigateByUrl('/login');
  }
}
