import { Component, OnInit } from '@angular/core';
import {userDetails} from '../mockdata/userDetails';
import { userbalance } from '../../Pojo/user-balance';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public selecteduser:userbalance;
  userslist=userDetails;
  onSelect(user: userbalance): void {
    this.selecteduser = user;
  }
  constructor() { }

  ngOnInit() {
  }

}
