import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ContactsService } from '../../Services/Contacts.service';
import { Router } from '@angular/router';
import { Contact } from '../../model/model.contact';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    pageContacts: any;
    motCle = '';
    currentPage = 0;
    size = 5;
    pages: Array<number>;

    constructor(
        // private http: HttpClient,
        public authService: AuthenticationService,
        private router: Router,
        private contactsService: ContactsService
    ) {}

    ngOnInit() {
        this.doSearch();
    }

    doSearch() {
        this.contactsService.getContacts(this.motCle, this.currentPage, this.size).subscribe(
            data => {
                this.pageContacts = data;
                // this.pages = new Array(produits.totalPages);
                console.log(
                    'pageContacts doSearch :' +
                        this.pageContacts +
                        ', Mot cle :' +
                        this.motCle +
                        ', CurrentPage : ' +
                        this.currentPage +
                        ', Size : ' +
                        this.size
                );
            },
            err => {
                // Si erreur suppression du Token enregistré dans le localStorage
                this.authService.onLogout();
                this.router.navigateByUrl('/login');
                console.log('pageContacts doSearch err :' + err);
            }
        );
    }

    gotoPage(i: number) {
        this.currentPage = i;
        this.doSearch();
    }

    onEditContact(id: number) {
        this.router.navigate(['edit-contact', id]);
    }

    onDeleteContact(contact: Contact) {
        const confirm = window.confirm('Etes vous sûr de vouloir supprimer ?');
        if (confirm === true) {
            this.contactsService.deleteContact(contact).subscribe(
                data => {
                    this.pageContacts.content.splice(this.pageContacts.content.indexOf(contact), 1);
                },
                err => {
                    console.log(err);
                }
            );
        }
    }
}
