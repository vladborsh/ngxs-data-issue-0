import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { NgxsModule } from '@ngxs/store';
import { ContactsState } from '../../../+state/contacts.state';
import { ProceduresPageRoutingModule } from './contacts.routing';

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    ProceduresPageRoutingModule,
    NgxsModule.forFeature([ContactsState]),
  ]
})
export class ContactsModule {}
