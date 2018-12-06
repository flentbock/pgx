import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitsService} from '../../Services/Produits.service';
import {Produit} from '../../model/model.produit';
import {AuthenticationService} from '../../Services/authentication.service';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit {
  mode = 1;
  produit: Produit = new Produit();
  idProduit: number;

  constructor(public activatedRoute: ActivatedRoute,
              public authService: AuthenticationService,
              public router: Router,
              public produitsService: ProduitsService) {
    this.idProduit = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.produitsService.getProduit(this.idProduit)
      .subscribe( data => {
        // @ts-ignore
        this.produit = data;
      }, err => {
        // Si erreur suppression du Token enregistré dans le localStorage
        this.authService.onLogout();
        this.router.navigateByUrl('/login');
        console.log('pageProduits doSearch err :' + err);
      });
  }

  updateProduit() {
    this.produitsService.updateProduit(this.produit)
      .subscribe( data => {
        alert('Mise à jour effectuée');
        this.router.navigate(['produits']);
      }, err => {
        // Si erreur suppression du Token enregistré dans le localStorage
        this.authService.onLogout();
        this.router.navigateByUrl('/login');
        console.log('pageContacts doSearch err :' + err);
      });
  }

}
