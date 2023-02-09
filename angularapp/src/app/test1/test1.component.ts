import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  dis:string;
  count:number =0;
  firstName:string = ""
  constructor() { }

  ngOnInit() {
  }
   
  onClick(){
    // console.log("Button has clicked");
    this.count++;
  }

  onKeyUp(value):any {
    console.log('$event', value.target.value)
    this.dis = value.target.value
  }
  
}
