import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor1',
  templateUrl: './ngfor1.component.html',
  styleUrls: ['./ngfor1.component.css']
})
export class Ngfor1Component implements OnInit {

  countries = [
    { id: '1', name: 'India'},
    { id: '2', name: 'Germany'}
  ]

  arrStates: Array<any> = [
    { id: 's1', parentId: '2', name:'Bavaria'},
    { id: 's2', parentId: '2', name:'Berlin'},
    { id: 's3', parentId: '1', name:'Maharashtra'},
    { id: 's4', parentId: '1', name:'Tamilnadu'},

  ]

  states: Array<any> = [];

  // countries = [
  //   {name:'Bharat',state:['MHA','UP','MP','HP']},
  //   {name:'USA',state:['NY','LA','Texsa','Latin']},
  //   {name:'Rasia',state:['Mossco','Daos','Ukrain','Ruse']}
  // ];
  // states =[];
  constructor() { }

  ngOnInit() {
  }
  // onChangeCountry(contry){
  //   this.states = this.countries.find((contr)=>{return contr.name == contry}).state;
  // }

  OnCountrySelect(val: any) {

    this.states = this.arrStates.filter(c => c.parentId == val.target.value);
  }

}
