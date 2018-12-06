import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../Services/authentication.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pgx';

  constructor(private http: HttpClient,
              public authService: AuthenticationService,
              private router: Router) {}

  ngOnInit() { }


  onLogout() {
    this.authService.onLogout();
    console.log('onLogout' + this.authService.isLogin() );
    this.router.navigateByUrl('/accueil');
  }

  onLogin() {
    console.log('onLogout' + this.authService.isLogin() );
    this.router.navigateByUrl('/login');
  }
}
