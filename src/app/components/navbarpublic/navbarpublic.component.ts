import { Component } from '@angular/core';
import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
    selector: 'app-navbarpublic',
    templateUrl: './navbarpublic.component.html',
    styleUrls: ['./navbarpublic.component.css']
})
export class NavbarpublicComponent {
    constructor(public authService: AuthenticationService) {}
}
