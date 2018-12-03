import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Produit} from '../model/model.produit';
import {Contact} from '../model/model.contact';


@Injectable()
export class ProduitsService {
  private host = 'http://localhost:8181';
  private urlProduits = this.host + '/produits';
  private url = null;
  private jwtToken = null;
  private roles: Array<any>;

  constructor(private http: HttpClient) { }

  // lire le token dans le localstorage
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  getProduits(motCle: string, page: number, size: number) {
    this.url = this.host + '/produits/chercherProduits?motCle=' + motCle + '&size=' + size + '&page=' + page;
    console.log('getProduits: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  getProduit(id: number) {
    this.url = this.urlProduits + '/' + id;
    console.log('getProduit: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  saveProduit(produit: Produit) {
    this.url = this.urlProduits;
    console.log('saveProduit: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    console.log('Save :' + this.http.post(this.url, produit, {headers: new HttpHeaders({'Authorization': this.jwtToken})}));
    return this.http.post(this.url, produit, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  updateProduit(produit: Produit) {
    this.url = this.urlProduits + '/' + produit.id;
    console.log('updateProduit : ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    console.log('Update :' + this.http.put(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})}));
    return this.http.put(this.url, produit, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
}
