import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/model.user';


@Injectable()
export class UsersService {
  private host = 'http://localhost:8181';
  private urldefault = this.host + '/users';
  private urldefaultmore = this.host + '/';
  private url = null;
  private jwtToken = null;
  private roles: Array<any>;

  constructor(private http: HttpClient) {}

  // lire le token dans le localstorage
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  getUser(id: number) {
    this.url = this.urldefaultmore + id;
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  getUsers(motCle: string, page: number, size: number) {
    this.url = 'http://localhost:8181/contacts/chercherUsers?motCle=' + motCle + '&size=' + size + '&page=' + page;
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  saveUser(user: User) {
    this.url = this.urldefault;
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    console.log('Save :' + this.http.post(this.url, user, {headers: new HttpHeaders({'Authorization': this.jwtToken})}));
    return this.http.post(this.url, user, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    // return  this.http.post('http://localhost:8181/contacts', contact).pipe();
  }

  updateUser(user: User) {
    this.url = this.urldefaultmore + user.id;
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    console.log('Update :' + this.http.put(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})}));
    return this.http.put(this.url, user, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    // return  this.http.put('http://localhost:8181/contacts/' + contact.id, contact).pipe();
  }

  deleteUser(user: User) {
    this.url = this.urldefaultmore + user.id;
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    // return  this.http.delete('http://localhost:8181/contacts/' + contact.id).pipe();
  }

}
