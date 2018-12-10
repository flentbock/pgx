import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../Services/authentication.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pgx';
  isLoggedIn$: Observable<boolean>;
  isLog: boolean;

  constructor(private http: HttpClient,
              public authService: AuthenticationService,
              private router: Router) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(
      value =>  this.isLog = value);
  }
}
