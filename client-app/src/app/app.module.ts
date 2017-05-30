import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { FlowerComponent } from './flower/flower.component';

import { AppRoutingModule } from './app-routing.module';

// Delete posts later
import { FakePostsComponent } from './fake-posts/fake-posts.component';
import { PostsService } from './shared/posts.service';
import { FlowersService } from './shared/flowers.service';
import { InitFlowerDbService } from './shared/init-flower-db.service';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { NgbdProgressbarBasicComponent } from './shared/ng-bootstrap/ngbd-progressbar-basic/ngbd-progressbar-basic.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    FlowerComponent,
    NavigationComponent,
    FlowerListComponent,
    FakePostsComponent,
    ImageUploaderComponent,
    NgbdProgressbarBasicComponent
  ],
  providers: [PostsService, FlowersService, InitFlowerDbService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
