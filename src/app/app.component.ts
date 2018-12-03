import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pgx';
  isLogin = false;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.isLogin = this.authService.isLogin();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  onLogin() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
