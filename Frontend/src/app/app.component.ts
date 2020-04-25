import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';
  constructor(public usersService: UsersService) { }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    const token = localStorage.getItem('authToken');
    console.log(token);
    if (token) {
      console.log('info');
      this.usersService.getInfo(token)
        .subscribe((res: any) => {
          this.usersService.setUser(res);
          console.log(this.usersService.setUser(res));
        },
          (error) => {
            console.error(error);
        });
    }
  }
}
