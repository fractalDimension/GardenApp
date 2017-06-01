import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent }    from './homepage/homepage.component';
import { FlowerListComponent }  from './flower-list/flower-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'flowers', component: FlowerListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
