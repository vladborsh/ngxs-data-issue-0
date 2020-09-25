import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsState } from 'src/+state/contacts.state';
import { ContactInterface } from 'src/models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private contactState: ContactsState) {}

  public getContacts$(): Observable<ContactInterface[]> {
    return this.contactState.contacts$;
  }
}
