import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle1',
  templateUrl: './ngstyle1.component.html',
  styleUrls: ['./ngstyle1.component.css']
})
export class Ngstyle1Component implements OnInit {

  sPassword:string;
  secondMassage:string;
  displayMassage:boolean=false;
  messageArr=[];
  count=1;
  backgroundColor={
    'background-color':'blue'
  }
 
     
      
  constructor() { }

  ngOnInit() {
    
  }
  updateClock(){
    const h = new Date().getHours();
      const m = new Date().getMinutes();
       const s = new Date().getSeconds();
       
      
     return  `Time :${h}:${m}:${s}`
  }
  
  onClick(){
    
    if(this.displayMassage==false){
    this.sPassword ="Secret Password : ' tuna '";
    this.displayMassage= true;
    }else {
      this.messageArr.push(this.updateClock());
    }
  }

 
}
