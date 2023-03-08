import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  isSubmited = false;
  cities;
  userName
  constructor(private _utilityService:UtilityService) {

    this._utilityService.userName.subscribe(res=>{
      console.log('Comp3 ',res);
      this.userName = res;

    },err=>{
      console.log('error occured',err);
      
    })

    this._utilityService.cities.subscribe(res1=>{
      console.log('Data from Array',res1);
      this.cities = res1;
      
    },err=>{console.log('error occured',err); })
   }

  ngOnInit() {
  }
  updateUsername(uname){
    this.userName = uname.value
    console.log(uname.value);
    this._utilityService.userName.next(uname.value);
    

  }

  displayCity(){
    this.isSubmited = true;

    this._utilityService.cities.next(this.cities)
  }
}
