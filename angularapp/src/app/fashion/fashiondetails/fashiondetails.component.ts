import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fashiondetails',
  templateUrl: './fashiondetails.component.html',
  styleUrls: ['./fashiondetails.component.css']
})
export class FashiondetailsComponent implements OnInit {

  id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
  }

}
