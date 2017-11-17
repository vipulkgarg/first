import { Component, OnInit } from '@angular/core';
import { user} from './users';
import { USERS } from './mockUser';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users=USERS;
  constructor() { }

  ngOnInit() {
  }

}
