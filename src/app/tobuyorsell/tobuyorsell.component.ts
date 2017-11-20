import { Component, OnInit } from '@angular/core';
import {UserListComponent} from '../user-list/user-list.component' 
import {stockDetails1} from '../mockdata/stockdetails';
@Component({
  selector: 'app-tobuyorsell',
  templateUrl: './tobuyorsell.component.html',
  styleUrls: ['./tobuyorsell.component.css']
})
export class TobuyorsellComponent implements OnInit {
  
  UserListComponent.selecteduser;
  constructor() { }

  ngOnInit() {
  }

}
