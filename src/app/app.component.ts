import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactInterface } from 'src/models/contact.interface';
import { ContactsState } from '../+state/contacts.state';
import { ContactService } from './services/contact/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {}
