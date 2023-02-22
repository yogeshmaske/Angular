import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exersise1',
  templateUrl: './exersise1.component.html',
  styleUrls: ['./exersise1.component.css']
})
export class Exersise1Component implements OnInit {

  users=[];
  admins = [];
  constructor() { }

  ngOnInit() {
  }

  pushUsers(data){
   this.users.push(data);
  }

  pushAdmins(data){
   this.admins.push(data);
  }
  
  onRemoveUsers(item){
    this.users.splice(item,1);
  }

  onRemoveAdmins(item){
    this.admins.splice(item,1);
  }
}
