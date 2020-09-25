import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsState } from 'src/+state/contacts.state';
import { ContactService } from 'src/app/services/contact/contact.service';
import { ContactInterface } from 'src/models/contact.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {
  public contacts$: Observable<ContactInterface[]>;

  constructor(
    public contactService: ContactService,
  ) {}

  public ngOnInit(): void {
    this.contacts$ = this.contactService.getContacts$();
  }
}
