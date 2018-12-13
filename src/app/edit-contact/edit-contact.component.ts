import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/model.contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../../Services/Contacts.service';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html',
    styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
    mode = 1;
    contact: Contact = new Contact();
    idContact: number;

    constructor(
        public activatedRoute: ActivatedRoute,
        public authService: AuthenticationService,
        public router: Router,
        public contactsService: ContactsService
    ) {
        this.idContact = activatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.contactsService.getContact(this.idContact).subscribe(
            data => {
                // @ts-ignore
                this.contact = data;
            },
            err => {
                // Si erreur suppression du Token enregistré dans le localStorage
                this.authService.onLogout();
                this.router.navigateByUrl('/login');
                console.log('pageContacts doSearch err :' + err);
            }
        );
    }

    updateContact() {
        this.contactsService.updateContact(this.contact).subscribe(
            data => {
                alert('Mise à jour effectuée');
                this.router.navigate(['contacts']);
            },
            err => {
                // Si erreur suppression du Token enregistré dans le localStorage
                this.authService.onLogout();
                this.router.navigateByUrl('/login');
                console.log('pageContacts doSearch err :' + err);
            }
        );
    }
}
