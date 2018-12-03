import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../../Services/authentication.service';
import {Router} from '@angular/router';
import {ProduitsService} from '../../Services/Produits.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  pageProduits: any;
  motCle = '';
  currentPage = 0;
  size = 5;
  pages: Array<number>;

  constructor(private http: HttpClient,
              public authService: AuthenticationService,
              private router: Router,
              private produitsService: ProduitsService) { }

  ngOnInit() {
    this.doSearch();
   }

  doSearch() {
    this.produitsService.getProduits(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageProduits = data;
        this.pages = new Array(data.totalPages);
        console.log('pageProduits doSearch :' + this.pageProduits
          + ', Mot cle :' + this.motCle + ', CurrentPage : ' +  this.currentPage + ', Size : ' +  this.size);
      }, err => {
        // Si erreur suppression du Token enregistré dans le localStorage
        this.authService.logout();
        this.router.navigateByUrl('/login');
        console.log('pageProduits doSearch err :' + err);
      });
  }

  gotoPage(i: number) {
    this.currentPage = i;
    this.doSearch();
  }

  onEditProduit(id: number) {
    this.router.navigate(['produit-edit', id]);
  }
}
