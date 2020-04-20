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

<<<<<<< HEAD
@ViewChild(UserComponent) user: UserComponent;
// tslint:disable-next-line: no-unused-expression
showprofile(){ this.user.showprofile(); }
// tslint:disable-next-line: no-unused-expression
showEditprofile(){ this.user.showEditprofile(); }
// tslint:disable-next-line: no-unused-expression
showpedidos(){this.user.showpedidos(); }
=======
>>>>>>> dev

ngOnInit(): void {
  EventBus.getInstance().listen('onloggin', () => this.showLog = false);
  }

}
