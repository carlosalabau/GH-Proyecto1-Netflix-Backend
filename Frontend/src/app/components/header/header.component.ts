import { Component, OnInit } from '@angular/core';
import EventBus from 'src/app/bus/EventBus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
showLog = true;
  constructor() { }

  ngOnInit(): void {
  EventBus.getInstance().listen('onloggin', () => this.showLog = false);

  }

}
