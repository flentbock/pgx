import { Component, OnInit } from '@angular/core';
import {User} from '../../model/model.user';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../Services/authentication.service';
import {UsersService} from '../../Services/Users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();
  idUser: number;

  constructor(public activatedRoute: ActivatedRoute,
              public authService: AuthenticationService,
              public router: Router,
              public usersService: UsersService) {
    this.idUser = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.usersService.getUser(this.idUser)
      .subscribe( data => {
        // @ts-ignore
        this.user = data;
      }, err => {
        // Si erreur suppression du Token enregistré dans le localStorage
        this.authService.onLogout();
        this.router.navigateByUrl('/login');
        console.log('UserEditComponent ngOnInit err :' + err);
      });
  }

  updateUser() {
    this.usersService.updateUser(this.user)
      .subscribe( data => {
        alert('Mise à jour effectuée');
        this.router.navigate(['users']);
      }, err => {
        // Si erreur suppression du Token enregistré dans le localStorage
        this.authService.onLogout();
        this.router.navigateByUrl('/login');
        console.log('UserEditComponent updateUser err :' + err);
      });
  }

}
