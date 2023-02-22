import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform1',
  templateUrl: './reactiveform1.component.html',
  styleUrls: ['./reactiveform1.component.css']
})
export class Reactiveform1Component implements OnInit {
  myForm1:FormGroup;
  //today's date
todayDate:Date = new Date();

subscribe=['Basic','Advanced','Pro'];

isSubmited:boolean = false;
  maxDate: string;


  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.myForm1 = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required),
      'date': new FormControl(formatDate(new Date(), "yyyy-MM-dd", "en")),
      'sub': new FormControl('Advanced')
    })
  }

  onSubmit(){
    this.isSubmited = true;
    console.log(this.myForm1.value);
    

  }


 
}
