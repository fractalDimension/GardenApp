import { Component } from '@angular/core';
import { Http } from '@angular/http';

// Import rxjs map operator
// import 'rxjs/add/operator/map';

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
