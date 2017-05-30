import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { InitFlowerDbService } from './shared/init-flower-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private initFlowerDbService: InitFlowerDbService) {
    initFlowerDbService.ngOnInit();
  }
}
