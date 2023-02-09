import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor1',
  templateUrl: './ngfor1.component.html',
  styleUrls: ['./ngfor1.component.css']
})
export class Ngfor1Component implements OnInit {

  

  countries = [
    {name:'Bharat',state:['MHA','UP','MP','HP']},
    {name:'USA',state:['NY','LA','Texsa','Latin']},
    {name:'Rasia',state:['Mossco','Daos','Ukrain','Ruse']}
  ];
  states =[];
  constructor() { }

  ngOnInit() {
  }
  onChangeCountry(contry){
    this.states = this.countries.find((contr)=>{return contr.name == contry}).state;
  }

}
