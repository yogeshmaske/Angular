import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolveexample',
  templateUrl: './resolveexample.component.html',
  styleUrls: ['./resolveexample.component.css']
})
export class ResolveexampleComponent implements OnInit {
 
  users:any;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.users = this.activateRoute.snapshot.data['data'];
    console.log('resolve data route getting',this.users);
    
  }

}
