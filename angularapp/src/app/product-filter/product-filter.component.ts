import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  nameSearch='';
  users: Object;
  constructor(private demoService:DemoService) { }

  ngOnInit() {

    this.demoService.getUsers().subscribe(res=>{
      console.log('User Api Result', res); 
      this.users = res;
    }, err =>{
      console.log(err);
      
    })
  }

}
