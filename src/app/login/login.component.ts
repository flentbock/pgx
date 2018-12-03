import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode = 0;
  constructor(private authService: AuthenticationService, private router: Router ) { }

  ngOnInit() {
  }

  onLogin(user) {
    this.authService.login(user)
      .subscribe(resp => {
        const jwtToken = resp.headers.get('Authorization');
        console.log('mon token :' + resp.headers.get('Authorization'));
        this.authService.saveToken(jwtToken);
        this.router.navigateByUrl('/tasks');
      }, err => {
          this.mode = 1;
        console.log(err);
      });
  }

}