import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../../Services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  listFormations;
  listEtudiants;
  currentFormation = {id: -1};

  constructor(public authService: AuthenticationService, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
      this.authService.getFormations()
        .subscribe(data => {
          this.listFormations = data;
        }, err => {
          // Si erreur suppression du Token enregistré dans le localStorage
          this.authService.logout();
          this.router.navigateByUrl('/login');
        });
  }

  onGetEtudiants(f) {
    this.currentFormation = f;
    this.authService.getFormationEtudiants(this.currentFormation.id)
      .subscribe(data => {
        this.listEtudiants = data;
        console.log(this.listEtudiants);
      }, err => {
        // Si erreur suppression du Token enregistré dans le localStorage
        console.log(err);
        this.authService.logout();
        this.router.navigateByUrl('/login');
      });
  }

}
