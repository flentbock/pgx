import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../../Services/authentication.service';
import {Router} from '@angular/router';
import {ProduitsService} from '../../Services/Produits.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit  {

  displayedColumns: string[] = ['code', 'refarticle', 'refheulin', 'designation', 'categorie', 'quantite', 'edit', 'details'];
  filterCode;
  filterRefArt;
  filterRefHeu;
  filterDes;
  filterCat;

  pageProduits: any;

  constructor(private http: HttpClient,
              public authService: AuthenticationService,
              private router: Router,
              private produitsService: ProduitsService,
              private store: Store<any>) { }

  ngOnInit() {
    this.doSearch();
   }

  doSearch() {
    this.produitsService.getProduitsAll()
      .subscribe(data => {
        this.pageProduits = data;
        console.log('pageProduits doSearch :' + this.pageProduits);
      }, err => {
        // Si erreur suppression du Token enregistré dans le localStorage
        this.authService.onLogout();
        this.router.navigateByUrl('/login');
        console.log('pageProduits doSearch err :' + err);
      });
  }

  doSearchNgrx() {
    // @ts-ignore
    this.store.dispatch('GETPRODUITSALL', this.doSearch());

  }


  gotoPage(i: number) {
    // this.currentPage = i;
    this.doSearch();
  }

  onEditProduit(id: number) {
    this.router.navigate(['produit-edit', id]);
  }

  onEditMouvementstock(id: number) {
    this.router.navigate(['mouvementstock', id]);
  }

}
