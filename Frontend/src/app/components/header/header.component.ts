import { Component, OnInit } from '@angular/core';
import EventBus from 'src/app/bus/EventBus';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public usersService: UsersService) { }


ngOnInit(): void {
  this.usersService.getUser();
  }


  logout(){
      this.usersService.userLogout()
      .subscribe((log: any) => {
        console.log(log);
      }, err => console.log(err)
      );
    }

}
