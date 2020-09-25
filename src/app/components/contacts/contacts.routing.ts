import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';

const proceduresPageRoute = RouterModule.forChild([
  {
    path: '',
    component: ContactsComponent,
  },
]);

@NgModule({
  imports: [proceduresPageRoute],
  exports: [RouterModule],
})
export class ProceduresPageRoutingModule {}
