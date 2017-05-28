import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent }    from './homepage/homepage.component';
import { FlowerListComponent }  from './flower-list/flower-list.component';

import { FakePostsComponent } from './fake-posts/fake-posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'flowers', component: FlowerListComponent },
  { path: 'posts', component: FakePostsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
