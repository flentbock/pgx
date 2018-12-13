import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';
import { ProduitsService } from '../../Services/Produits.service';
import { Action, select, Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';

class GetProduitAllAction implements Action {
    readonly type = 'GETPRODUITSALL';

    constructor(public payload: AppState) {}
}

@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
    displayedColumns: string[] = [
        'code',
        'refarticle',
        'refheulin',
        'designation',
        'categorie',
        'quantite',
        'edit',
        'details'
    ];
    filterCode;
    filterRefArt;
    filterRefHeu;
    filterDes;
    filterCat;

    dataProduit: any;

    constructor(
        // private http: HttpClient,
        public authService: AuthenticationService,
        private router: Router,
        private produitsService: ProduitsService,
        private store: Store<any>
    ) {}

    ngOnInit() {
        this.doSearch();
        // Abonnement au store indiqué dans
        this.store.pipe(select('appState')).subscribe(data => {
            this.dataProduit = data.produits;
        });
    }

    doSearch() {
        this.produitsService.getProduitsAll().subscribe(
            data => {
                // this.pageProduits = produits;
                console.log('pageProduits doSearch :' + data);

                // Mise à jour du store
                const updateState: AppState = {
                    produits: data,
                    lien: 'getProduitsAll'
                };
                this.store.dispatch(new GetProduitAllAction(updateState));
            },
            err => {
                // Si erreur suppression du Token enregistré dans le localStorage
                this.authService.onLogout();
                this.router.navigateByUrl('/login');
                console.log('pageProduits doSearch err :' + err);
            }
        );
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
