import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../Services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MouvementstockService } from '../../Services/mouvementstock.service';

@Component({
    selector: 'app-mouvementstock',
    templateUrl: './mouvementstock.component.html',
    styleUrls: ['./mouvementstock.component.css']
})
export class MouvementstockComponent implements OnInit {
    displayedColumns: string[] = ['date', 'quantite'];

    pageMouvementstock: any;
    idProduit: number;

    constructor(
        public activatedRoute: ActivatedRoute,
        // private http: HttpClient,
        public authService: AuthenticationService,
        private router: Router,
        private mouvementstockService: MouvementstockService
    ) {
        this.idProduit = activatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.mouvementstockService.getMouvementstock(this.idProduit).subscribe(
            data => {
                this.pageMouvementstock = data;
                console.log('pageMouvementstock doSearch :' + this.pageMouvementstock);
            },
            err => {
                // Si erreur suppression du Token enregistré dans le localStorage
                this.authService.onLogout();
                this.router.navigateByUrl('/login');
                console.log('pageMouvementstock doSearch err :' + err);
            }
        );
    }
    doSearch(id: number) {}
}
