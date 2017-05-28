import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { FlowerComponent } from './flower/flower.component';

import { AppRoutingModule } from './app-routing.module';

// Delete posts later
import { FakePostsComponent } from './fake-posts/fake-posts.component';
import { PostsService } from './shared/posts.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    FlowerComponent,
    NavigationComponent,
    FlowerListComponent,
    FakePostsComponent
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
