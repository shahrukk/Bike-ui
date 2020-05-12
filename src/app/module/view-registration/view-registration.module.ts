import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRegistrationRoutingModule } from './view-registration-routing.module';
import { ViewRegistrationComponent } from './view-registration.component';


@NgModule({
  declarations: [ViewRegistrationComponent],
  imports: [
    CommonModule,
    ViewRegistrationRoutingModule
  ]
})
export class ViewRegistrationModule { }
