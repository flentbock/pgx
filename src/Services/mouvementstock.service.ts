import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Produit} from '../model/model.produit';

@Injectable()
export class MouvementstockService {
  private host = 'http://localhost:8181';
  private urldefault = this.host + '/produits';
  private url = null;
  private jwtToken = null;
  private roles: Array<any>;

  constructor(private http: HttpClient) { }

  // lire le token dans le localstorage
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  getMouvementstock(id: number) {
    this.url = this.urldefault + '/' + id + '/mouvementsStock';
    console.log('url : ' + this.url);
    console.log('this.jwtToken A : ' + 'this.jwtToken' + ' - loadToken A : ' + this.loadToken());
    this.jwtToken = this.loadToken(); // Le token peut être en mémoire, aller vérifier sa présence physique
    console.log('this.jwtToken B : ' + 'this.jwtToken' + ' - loadToken B : ' + this.loadToken());
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  /*  getProduits(motCle: string, page: number, size: number) {
      this.url = this.host + '/produits/chercherProduits?motCle=' + motCle + '&size=' + size + '&page=' + page;
      console.log('getProduits: ' + this.url);
      if (this.jwtToken == null) { this.loadToken(); }
      return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    }*/

  getProduit(id: number) {
    this.url = this.urldefault + '/' + id;
    console.log('getProduit: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  saveProduit(produit: Produit) {
    this.url = this.urldefault;
    console.log('saveProduit: ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    console.log('Save :' + this.http.post(this.url, produit, {headers: new HttpHeaders({'Authorization': this.jwtToken})}));
    return this.http.post(this.url, produit, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  updateProduit(produit: Produit) {
    this.url = this.urldefault + '/' + produit.id;
    console.log('updateProduit : ' + this.url);
    if (this.jwtToken == null) { this.loadToken(); }
    console.log('Update :' + this.http.put(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})}));
    return this.http.put(this.url, produit, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
}
