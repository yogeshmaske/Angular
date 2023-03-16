import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Users } from '../model/users';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users=[];
  constructor( private firebaseService:FirebaseService) { }

  ngOnInit() {
    
    //emit(1,2,3,4,5)
    // Using from & filter & pipe 
    const source =  from([1,2,3,4,5])

    //filter even numbers
    const example = source.pipe(filter(num => num%2 ===0));
   
    //subscribe data
    example.subscribe(res=>{
      console.log(`Even Number: ${res}`);      
    })

    // Using of & map & pipe
    const obs = of(1,2,3).pipe(
    map(x=>x+1)).subscribe(res=>{
      console.log('obs of:',res); 
    })

  }

  CreatePost(){

    // this.firebaseService.createPosts().subscribe(res=>{
    //   console.log('Firebase Post strart here in local ',res);
    // })

    this.firebaseService.createPosts().subscribe(res=>{
      console.log('Posting Data to Firebase',res);      
    })
  }

  GetData() {

    // this.firebaseService.getPostDataFirebase().subscribe(res => {

    //   console.log('Firebase get', res);

    // })

 

    this.firebaseService.getPostDataFirebase().pipe(

      map(responseData => {

        console.log('before manipulate', responseData)

        // empty array 

        const postArray = [];

        // for in loop 

        for(const key in responseData) {

          // check the key 

          if(responseData.hasOwnProperty(key)) {

            // push new value into array 

            postArray.push({...responseData[key], id:key})

          }

        }

        return postArray;

      })

    ).subscribe(res => {

      console.log('after manipulate data', res);

    })

  }
  // getData(){

  //   // this.firebaseService.getPostDataFirebase().subscribe(res=>{
  //   //   console.log('Get Data from FireBase ',res);
  //   // })

  //   this.firebaseService.getPostDataFirebase().pipe(map((resData)=>{
  //     console.log(resData);
  //     const userArray=[];
  //     for (const key in resData) {     
  //     //  console.log(resData[key]);
  //      if (resData.hasOwnProperty(key)) {
  //       userArray.push({userId:key, ...resData[key]} )
  //      }
  //     }
  //     return userArray;
  //    }))
  //    .subscribe(res=>{
  //     console.log(res);
  //     this.users=res; 
  //     console.log(this.users);
  //    })
  // }

  
}
