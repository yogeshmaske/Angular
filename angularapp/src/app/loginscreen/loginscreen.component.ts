import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LogindataService } from '../service/logindata.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  loginForm :FormGroup;
  isSubmited=false;
  loginData: any = [];
  loginD;

  


  constructor(private loginDataService:LogindataService) {
    this.createForm();
   }

  ngOnInit() {

  }
  createData() {
    
    
     this.loginD = {
     
            
            email:this.loginForm.value.email,
            password:this.loginForm.value.password    
    }
    
    // console.log(this.loginForm.value.email);
    // console.log(this.loginForm.value.password);
    

   return  this.loginDataService.create(this.loginD).subscribe((res)=>{
      console.log('Data inserted Server',res); 
    },(err=>{console.log(err)}))
    
  }

  getDataLocal(){
    this.loginDataService.getData().subscribe(res=>{
      console.log('Data from Server',res);
      this.loginData = res;
    })
  }

  createForm(){
    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email],this.NaEmails),//,this.NaEmails
      'password': new FormControl(null,[Validators.required])
    })
  }

  // NaEmails(Control:FormControl){
  //   if(this.loginData.indexOf(Control.value) !==-1){
  //     return {'namesNotAllowed':true}
  //   }else{
  //     return null;
  //   }
  // }

  NaEmails(Control:FormControl): Promise<any>| Observable<any>
   {
   const myResponse = new Promise<any> ((resolve,reject)=>{
    setTimeout(() => {

      // if(this.loginData.indexOf(Control.value) !==-1){
      //   return {'EmailNotAllowed':true}
      // }else{
      //   return null;
      // }

      if (this.loginData.email.indexOf(Control.value) !==-1) {
        resolve({'emailNotAllowed':true})
      }else{
        resolve(null)
      }
    }, 3000);
   })
   return myResponse;
}


onsubmit(){
  this.isSubmited = true;
  
  this.createData()
 
  
}
}
