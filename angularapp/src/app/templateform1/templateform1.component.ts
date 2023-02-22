import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform1',
  templateUrl: './templateform1.component.html',
  styleUrls: ['./templateform1.component.css']
})
export class Templateform1Component implements OnInit {

  // @ViewChild('myForm',{static: false}) myForm:NgForm;
  defaultCourse='Angular';
  userName='';
  defaultGender='Male'
  genders = [
    {id:1,value:'Male'},
    {id:2,value:'Female'}
  ];
  submited=false;

  formData={
    userName:'',
    email:'',
    course:'',
    gender:''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    // console.log(this.myForm);
    this.submited=true
    // this.formData.userName = this.myForm.value.userDetail.username;
    // this.formData.email = this.myForm.value.userDetail.email;
    // this.formData.course = this.myForm.value.course;
    // this.formData.gender = this.myForm.value.gender;
    
    // this.myForm.reset();

    console.log(form);
    this.formData.userName = form.value.userDetail.username;

    
  }
  


  // Set value and patch value
  setUserName(){
    // this.myForm.setValue({
    //   userDetail:{
    //     username:'MyName',
    //     email:''
    //   },
    //   course:'',
    //   gender:'Male',

    // })

    // this.myForm.form.patchValue({
    //   userDetail:{
    //          username:'MyName'
    //       }
    // })


    // Extract and use data
  }


  // login(form: NgForm) {
  //   console.log(form.value)
  //   console.log(form.value)

  // }


}
