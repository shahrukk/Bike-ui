import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './module/admin/admin.component';
import { CallbackComponent } from './component/callback/callback.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: 'admin',
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin/view/:id',
    loadChildren: () => import('./module/view-registration/view-registration.module').then(m => m.ViewRegistrationModule)
  },
  {
    path: 'callback',
    component: CallbackComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
