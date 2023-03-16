import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  objUser:any;
  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {

    // let id = this.route.snapshot.params['id'];
    
    // this.postService.getPostById(id).subscribe(res=>{
    //   this.arrPost = res;
    //   console.log('get post by id',res);
    //   })

    let id = this.route.snapshot.params['id'];
    this.userService.getUsertById(id).subscribe(res=>{
      this.objUser =res;
      console.log('get user by id',res);
      
    })
  }

}
