import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Produit} from '../model/model.produit';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';

/*import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSelect',
  pure: true,
})*/

@Injectable()
export class ProduitsService /*implements PipeTransform*/{
  private host = 'http://localhost:8181';
  private urldefault = this.host + '/produits';
  private url = null;
  private jwtToken = null;
  private roles: Array<any>;

  constructor(private http: HttpClient,
              private router: Router,
              public authService: AuthenticationService) { }

  a: any;
  // lire le token dans le localstorage
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  getProduitsAll(/*
    filterCode?: string,
    filterRefArt?: string,
    filterRefHeu?: string,
    filterDes?: string,
    filterCat?: string*/
  ) {
    this.url = this.host + '/produits';
    this.jwtToken = this.loadToken(); // Le token peut être en mémoire, aller vérifier sa présence physique
    console.log(' -> getProduitsAll: ' + this.url + ' -> token memoire :' + this.jwtToken + ' -> token physique :' + this.loadToken());
    this.a = this.http.get(this.url, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
     /*.subscribe(response => {
        response.valueOf();
        /*this.transform(response.valueOf(), filterCode, filterRefArt, filterRefHeu, filterDes, filterCat);*/
      /*}, err => {
      // Si erreur suppression du Token enregistré dans le localStorage
      this.authService.onLogout();
      this.router.navigateByUrl('/login');
      console.log('pageProduits doSearch err :' + err);
    });*/
    console.log('A : ' + this.a);
    return this.a;
  }

  /*transform(value: any,
            filterCode?: string,
            filterRefArt?: string,
            filterRefHeu?: string,
            filterDes?: string,
            filterCat?: string): any {
    let listData = null;
    if (undefined === filterCode) { filterCode = ''; }
    if (undefined === filterRefArt) { filterRefArt = ''; }
    if (undefined === filterRefHeu) { filterRefHeu = ''; }
    if (undefined === filterDes) { filterDes = ''; }
    if (undefined === filterCat) { filterCat = ''; }
    console.log('Valeur :', value, '- FilterSelectPipe :', filterCode, filterRefArt, filterRefHeu, filterDes, filterCat);
    if (value) {
      listData = value.filter(p => p.code.includes(filterCode)
        && p.refarticle.includes(filterRefArt)
        && p.refheulin.includes(filterRefHeu)
        && p.designation.includes(filterDes)
        && p.categorie.includes(filterCat));
    }
    return listData;
  }*/

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
