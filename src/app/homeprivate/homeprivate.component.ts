import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './homeprivate.component.html',
  styleUrls: ['./homeprivate.component.css']
})
export class HomeprivateComponent  implements OnInit {


  constructor(public authService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.isLogin()) {
      this.router.navigateByUrl('/homepublic');
    }
  }

}
