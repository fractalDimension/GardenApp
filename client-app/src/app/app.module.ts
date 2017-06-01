import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { FlowerComponent } from './flower/flower.component';
import { ClassifiedImagesListComponent } from './classified-images-list/classified-images-list.component';
import { ClassifiedImageComponent } from './classified-image/classified-image.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

// Angular bootstrap components
import { NgbdProgressbarBasicComponent } from './shared/ng-bootstrap/ngbd-progressbar-basic/ngbd-progressbar-basic.component';

// Services
import { FlowersService } from './shared/flowers.service';
import { ClassifiedImagesService } from './shared/classifiedImages.service';
import { InitFlowerDbService } from './shared/init-flower-db.service';

// Directives
import { FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

// App Routing
import { AppRoutingModule } from './app-routing.module';

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
    NgbdProgressbarBasicComponent,
    FileSelectDirective,
    ClassifiedImagesListComponent,
    ClassifiedImageComponent,
    ImageUploaderComponent
  ],
  providers: [FlowersService, ClassifiedImagesService, InitFlowerDbService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
