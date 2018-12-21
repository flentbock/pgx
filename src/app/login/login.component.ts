import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    hide = true;
    mode = 0;
    constructor(private authService: AuthenticationService, private router: Router) {}

    ngOnInit() {}

    onLogin(f) {
        console.log("username :"+f.username,"password :"+f.password);
        console.log("login user : " + f.username);
        console.log("login password : " + f.password);
        this.authService.login(f).subscribe(
            resp => {
                const jwtToken = resp.headers.get('Authorization');
                console.log('mon token :' + resp.headers.get('Authorization'));
                this.authService.saveToken(jwtToken);
                this.router.navigateByUrl('/homeprivate');
            },
            err => {
                this.mode = 1;
                console.log('user : ' + f.username + ' - password : ' + f.password + ' - erreur : ' + err);
            }
        );
    }
}
