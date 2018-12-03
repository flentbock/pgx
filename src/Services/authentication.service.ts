import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Contact} from '../model/model.contact';

@Injectable()
export class AuthenticationService {

  private host = 'http://localhost:8181';
  private jwtToken = null;
  private roles: Array<any>;
  private url = null;

  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post(this.host + '/login', user, {observe: 'response'});
  }

  // lire le token dans le localstorage
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  // enregistrer le token dans le localstorage
  saveToken (jwt: string) {
  this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    const jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  logout() {
  this.jwtToken = null;
    localStorage.removeItem('token');
  }

  isLogin() {
    if (this.jwtToken != null) { return true; }
    return false;
  }

  isAdmin() {
    for (const r of this.roles) {
      if (r.authority === 'ADMIN') { return true; }
    }
    return false;
  }

  getTasks() {
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.host + '/tasks', {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  getFormations() {
    this.url = this.host + '/formations/';
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  getFormationEtudiants(idFormation) {
    this.url = this.host + '/formations/' + idFormation + '/etudiants';
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url,
      {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  saveTask(task) {
    return this.http.post(this.host + '/tasks', {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
}
