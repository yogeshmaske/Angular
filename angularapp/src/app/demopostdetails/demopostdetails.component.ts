import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-demopostdetails',
  templateUrl: './demopostdetails.component.html',
  styleUrls: ['./demopostdetails.component.css']
})
export class DemopostdetailsComponent implements OnInit {

  arrPost: any;
  // DI
  constructor(private route:ActivatedRoute,private postService:PostService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    
    this.postService.getPostById(id).subscribe(res=>{
      this.arrPost = res;
      console.log('get post by id',res);
      })
    
  }

}
