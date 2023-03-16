import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[]=[];

  constructor(private userService:UserService) { }

  ngOnInit() {

    // this.postService.getPost().subscribe(res=>{
    //   this.arrPost = res;
    //   console.log('Post Arr data',res);
      
    // })


    this.userService.getUser().subscribe(res=>{
      this.users = res;
      console.log('User Details',res);
      
    })
  }

}
