import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/model.contact';
import { ContactsService } from '../../Services/Contacts.service';

@Component({
    selector: 'app-new-contact',
    templateUrl: './new-contact.component.html',
    styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
    contact: Contact = new Contact();

    constructor(public contactService: ContactsService) {}

    ngOnInit() {}

    saveContact() {
        this.contactService.saveContact(this.contact).subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err);
            }
        );
    }
}
