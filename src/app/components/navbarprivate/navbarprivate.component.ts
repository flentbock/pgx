import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../Services/authentication.service';

@Component({
  selector: 'app-navbarprivate',
  templateUrl: './navbarprivate.component.html',
  styleUrls: ['./navbarprivate.component.css']
})

export class NavbarprivateComponent implements OnInit  {

  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
  }
}

