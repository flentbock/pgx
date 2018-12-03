import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../Services/Contacts.service';

@Component({
  selector: 'app-new-contact-v2',
  templateUrl: './new-contact-v2.component.html',
  styleUrls: ['./new-contact-v2.component.css']
})
export class NewContactV2Component implements OnInit {

  constructor(public contactService: ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm) {
    this.contactService.saveContact(dataForm)
      .subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  }

}
