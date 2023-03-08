import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform2',
  templateUrl: './reactiveform2.component.html',
  styleUrls: ['./reactiveform2.component.css']
})
export class Reactiveform2Component implements OnInit {

  myForm2:FormGroup;
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  isSubmited:boolean = false;
  countries:string[] = ['Uruguay','India','America','Rasia'];
  cCode =[{country:'Uruguay',code:12},
              {country:'India',code:91},
              {country:'America',code:41}
            ]
  isChar: boolean = false;
 constructor() { 
    this.createForm();
  
  }

  ngOnInit() {
  }
  

  createForm(){
    this.myForm2 = new FormGroup({
      'fullname':new FormControl('Homiro Simpsons',Validators.required),
      'date': new FormControl(null),
      'gender':new FormControl('Male',Validators.required),
      'country': new FormControl('Uruguay',Validators.required),
      'phone': new FormControl(null,[Validators.required,Validators.pattern("/^[0-9]{10,12}$/")]),
      'comments': new FormControl(null,[Validators.required,Validators.maxLength(250)]),
      
      
    })
  }

  
  allowNumers(phoneValue){
    // console.log(phoneValue)
    
    

  }

  

  // onCountryChange(event){
  //   console.log(event);
  // }

}
