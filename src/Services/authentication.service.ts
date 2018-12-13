import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService implements OnInit {
    private host = 'http://localhost:8181';
    private jwtToken = null;
    private roles: Array<any>;
    private url = null;

    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit(): void {
        this.loadToken();
    }

    get isLoggedIn() {
        this.loadToken();
        return this.loggedIn.asObservable();
    }

    login(user) {
        return this.http.post(this.host + '/login', user, { observe: 'response' });
    }

    // lire le token dans le localstorage
    loadToken() {
        this.jwtToken = localStorage.getItem('token');
        if (this.jwtToken != null) {
            this.loggedIn.next(true);
        } else {
            this.loggedIn.next(false);
        }
    }

    // enregistrer le token dans le localstorage
    saveToken(jwt: string) {
        this.jwtToken = jwt;
        localStorage.setItem('token', jwt);
        const jwtHelper = new JwtHelperService();
        this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
        this.loggedIn.next(true);
    }

    onLogin() {
        console.log('onLogin');
        if (this.jwtToken != null) {
            this.loggedIn.next(true);
            this.router.navigate(['/homeprivate']);
        } else {
            this.loggedIn.next(false);
            this.router.navigate(['/login']);
        }
    }

    onLogout() {
        console.log('onLogout');
        this.jwtToken = null;
        this.loggedIn.next(false);
        localStorage.removeItem('token');
        this.router.navigate(['/homepublic']);
    }

    isLogin() {
        console.log(this.jwtToken != null ? 'isLogin b: ' + true : 'isLogin b: ' + false);
        if (this.jwtToken != null) {
            return true;
        }
        return false;
    }

    isAdmin() {
        for (const r of this.roles) {
            if (r.authority === 'ADMIN') {
                return true;
            }
        }
        return false;
    }

    getTasks() {
        if (this.jwtToken == null) {
            this.loadToken();
        }
        return this.http.get(this.host + '/tasks', {
            headers: new HttpHeaders({ Authorization: this.jwtToken })
        });
    }

    getFormations() {
        this.url = this.host + '/formations/';
        console.log('URL: ' + this.url);
        if (this.jwtToken == null) {
            this.loadToken();
        }
        return this.http.get(this.url, {
            headers: new HttpHeaders({ Authorization: this.jwtToken })
        });
    }

    getFormationEtudiants(idFormation) {
        this.url = this.host + '/formations/' + idFormation + '/etudiants';
        console.log('URL: ' + this.url);
        if (this.jwtToken == null) {
            this.loadToken();
        }
        return this.http.get(this.url, {
            headers: new HttpHeaders({ Authorization: this.jwtToken })
        });
    }

    saveTask(task) {
        return this.http.post(this.host + '/tasks', {
            headers: new HttpHeaders({ Authorization: this.jwtToken })
        });
    }
}
