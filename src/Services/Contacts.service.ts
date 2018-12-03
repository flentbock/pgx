import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../model/model.contact';


@Injectable()
export class ContactsService {
  private host = 'http://localhost:8181';
  private urlContacts = this.host + '/contacts';
  private url = null;
  private jwtToken = null;
  private roles: Array<any>;

  constructor(private http: HttpClient) {}

  // lire le token dans le localstorage
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  getContact(id: number) {
    this.url = this.urlContacts + '/' + id;
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  getContacts(motCle: string, page: number, size: number) {
    this.url = 'http://localhost:8181/contacts/chercherContacts?motCle=' + motCle + '&size=' + size + '&page=' + page;
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  saveContact(contact: Contact) {
    this.url = this.urlContacts;
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    console.log('Save :' + this.http.post(this.url, contact, {headers: new HttpHeaders({'Authorization': this.jwtToken})}));
    return this.http.post(this.url, contact, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    // return  this.http.post('http://localhost:8181/contacts', contact).pipe();
  }

  updateContact(contact: Contact) {
    this.url = this.host + '/contacts/' + contact.id;
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    console.log('Update :' + this.http.put(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})}));
    return this.http.put(this.url, contact, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    // return  this.http.put('http://localhost:8181/contacts/' + contact.id, contact).pipe();
  }

  deleteContact(contact: Contact) {
    this.url = this.urlContacts + '/' + contact.id;
    console.log('URL: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    // return  this.http.delete('http://localhost:8181/contacts/' + contact.id).pipe();
  }

}
