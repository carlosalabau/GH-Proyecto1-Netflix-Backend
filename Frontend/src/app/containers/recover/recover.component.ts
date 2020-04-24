import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {
  recoverToken: string;
  constructor(
    private route: ActivatedRoute,
    public usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.recoverToken = this.route.snapshot.params.recoverToken;
  }
  resetPassword(password) {
    this.usersService.resetPassword(password, this.recoverToken)
  }

}
