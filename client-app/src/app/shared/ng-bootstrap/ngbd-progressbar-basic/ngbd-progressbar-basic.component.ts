import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngbd-progressbar-basic',
  templateUrl: './ngbd-progressbar-basic.component.html',
  styleUrls: ['./ngbd-progressbar-basic.component.css']
})
export class NgbdProgressbarBasicComponent implements OnInit {
  @Input() progVal: number;

  constructor() { }

  ngOnInit() {
  }

}
