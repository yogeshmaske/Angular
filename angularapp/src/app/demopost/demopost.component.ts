import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from "../model/post";

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  arrPost: Post[]=[];

  // DI Post Service
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPost().subscribe(res=>{
      this.arrPost = res;
      console.log('Post Arr data',res);
      
    })
  }

}
