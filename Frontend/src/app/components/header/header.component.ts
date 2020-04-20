import { Component, OnInit, ViewChild } from '@angular/core';
import EventBus from 'src/app/bus/EventBus';
import { UserComponent } from '../../containers/user/user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
showLog = true;
showProfile = true;
showEditProfile = false;
showPedidos = false;
  constructor() { }

@ViewChild(UserComponent) user: UserComponent;
// tslint:disable-next-line: no-unused-expression
showprofile(){ this.user.showprofile(); }
// tslint:disable-next-line: no-unused-expression
showEditprofile(){ this.user.showEditprofile(); }
// tslint:disable-next-line: no-unused-expression
showpedidos(){this.user.showpedidos(); }

ngOnInit(): void {
  EventBus.getInstance().listen('onloggin', () => this.showLog = false);
  }

}
