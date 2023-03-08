import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyserviceService } from '../service/myservice.service';



@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
   myReactiveForm:FormGroup;
   isSubmitted = false;
  age;
  showAge;
   courses: string[] = ['Angular', 'Javascript', 'Typescript'];
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ];

  notAllowedNames=['Jack','Harry'];

  constructor(private _fb: FormBuilder,private objService:MyserviceService) { 
    this.createForm();
    this.showAge =  objService.ageCalculator(this.age);

  }

  ngOnInit() { // it is a part of lifecyle hoock , it is called once your component initialize sucessfully

    // setValue is only usefull when we need to apply default value dynamicllly to 
    // All the Controls only
    // here if we remove one crol then it through error
  //  setTimeout(() => {
  //   this.myReactiveForm.setValue({
  //     'userDetails':{
  //       'username':'Anular User',
  //       'email':'A@gmail.com'
  //     },
  //     'course': 'Angular',
  //     'skills':['Angular']
  //   })
  //  }, 1000);
    

  // but patch value work with it
  // setTimeout(() => {
  //     this.myReactiveForm.patchValue({
  //       'userDetails':{
  //         'username':'Anular User',
  //         'email':'A@gmail.com'
  //       },
  //       'course': 'Angular',
        
  //     })
  //    }, 1000);
      
  }

  createForm(){
    // this.myReactiveForm = new FormGroup(
    //   {
    //     'userDetails': new FormGroup({   
    //       'username':new FormControl(null,[Validators.required,this.NaNames.bind(this)]),
    //       'email': new FormControl(null,[Validators.required,Validators.email],this.NaEmails)
    //     }),
    //     'course': new FormControl(null),
    //     'skills': new FormArray([
    //       new FormControl(null,Validators.required)
    //     ])
    //   });

    // Form builder
    this.myReactiveForm = this._fb.group({

      userDetails: this._fb.group({

        username: ['', [Validators.required, this.NaNames.bind(this) ]],

        email: ['', [Validators.required, Validators.email], this.NaEmails]

      }),

      course: ['Angular'],

      skills: this._fb.array([])

     })

  

  }

  onsubmit(){
    this.isSubmitted = true;
    alert('Method Called');
    console.log('My reactive Form',this.myReactiveForm.value);
    
  }


  onAddSkills(){
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required))
  }

NaNames(Control:FormControl){
  if(this.notAllowedNames.indexOf(Control.value) !==-1){
    return {'namesNotAllowed':true}
  }else{
    return null;
  }
}

NaEmails(Control:FormControl): Promise<any>| Observable<any>
{
   const myResponse = new Promise<any> ((resolve,reject)=>{
    setTimeout(() => {
      if (Control.value == 'codemindtech@gmail.com') {
        resolve({'emailNotAllowed':true})
      }else{
        resolve(null)
      }
    }, 3000);
   })
   return myResponse;
}

onClick(){

  this.showAge;
}
}
