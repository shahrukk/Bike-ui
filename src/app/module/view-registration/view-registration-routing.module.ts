import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRegistrationComponent } from './view-registration.component';

const routes: Routes = [{ path: '', component: ViewRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRegistrationRoutingModule { }
