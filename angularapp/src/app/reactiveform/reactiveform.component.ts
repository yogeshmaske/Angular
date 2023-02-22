import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
   myReactiveForm:FormGroup;
   isSubmitted = false;

   courses: string[] = ['Angular', 'Javascript', 'Typescript'];
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]

  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.myReactiveForm = new FormGroup(
      {
        'userDetails': new FormGroup({   
          'username':new FormControl('Angular User'),
          'email': new FormControl(null,[Validators.required,Validators.email])
        }),
        'course': new FormControl('Angular')
      });
  }

  onsubmit(){
    this.isSubmitted = true;
    alert('Method Called');
    console.log('My reactive Form',this.myReactiveForm.value);
    
  }

}
