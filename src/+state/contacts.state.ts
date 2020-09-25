import { State } from '@ngxs/store';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Injectable } from '@angular/core';
import { Computed, DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { ContactInterface } from '../models/contact.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ContactStateInterface {
    contacts: ContactInterface[];
}

const DEFAULT_STATE_DATA: ContactStateInterface = {
    contacts: [
        {
            name: 'John',
            address: 'Moscow',
            age: 23,
        },
    ],
};

@StateRepository()
@State<ContactStateInterface>({
    name: 'contact',
    defaults: DEFAULT_STATE_DATA,
})
@Injectable()
export class ContactsState extends NgxsDataRepository<ContactStateInterface> {
    public get contacts$(): Observable<ContactInterface[]> {
        return this.state$.pipe(map(state => state.contacts));
    }
}
