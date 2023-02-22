import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { logging } from 'protractor';

@Component({
  selector: 'app-templateform2',
  templateUrl: './templateform2.component.html',
  styleUrls: ['./templateform2.component.css']
})
export class Templateform2Component implements OnInit {
   
  isChar:boolean = false;
  minMax:boolean = false;
  matchPassword:boolean = false;
  cities =['Mumbai','Kolkata','Delhi']

  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  
   passInputType = 'password';
   cPassInputType ='password'
  show = false;
  cShow: boolean= false
  defaultGender= 'Male'

  constructor() { }

  ngOnInit() {
    
  }

  valMinMax(age){
   if (age>=17 && age<=20) {
    this.minMax = false;
   }else{
    this.minMax = true;
   }
       
  }
  // phoneLength(pnum){
  //   console.log(pnum);
  //   console.log(typeof pnum);
  //   let str =(toString(pnum));
    
  //   if (typeof pnum === 'number') {
  //     this.phoneDesable = true;
  //   }
  // }
  allowNumers(e) {		
		console.log(typeof (e.target.value));
		
		if(/\D/g.test(e.target.value)) {
			e.target.value = e.target.value.replace(/\D/g,'');
      this.isChar=true
		}
	}

  passHideShow() {
    if (this.passInputType === 'password') {
      this.passInputType = 'text';
      this.show = true;
    } else {
      this.passInputType = 'password';
      this.show = false;
    }
  }

  cPassHideShow(){
    if (this.cPassInputType === 'password') {
      this.cPassInputType = 'text';
      this.cShow = true;
    } else {
      this.cPassInputType = 'password';
      this.cShow = false;
    }
  }

  confirmPass(passVal){
    
    
    console.log(passVal.value.password);
    console.log(passVal.value.cpassword);

    if (passVal.value.password !== passVal.value.cpassword ) {
      
      this.matchPassword = true;
      
         
    }
}

rgister(myForm:NgForm){

  
  myForm.reset();     
  myForm.controls['city'].setValue('Mumbai');
  myForm.controls['gender'].setValue('Male');
}

}

