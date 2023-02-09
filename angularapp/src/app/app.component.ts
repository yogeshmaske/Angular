import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   id;
   ename;
   company;
   tech;
   
  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ]


  
  parentToChild:string = " I am coming from Parent";
  
  title = 'angularapp';
  name="Yogesh";
  data={
    name:"codemind",
    val:11
  }
  emp;
  imgUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  constructor(){
    this.callmethod();
  }
  callmethod(){
    this.emp =1000;
  }
  // callmethod(); we can not call here method.

  currTime(){
     let d = new Date();
     let h = new Date().getHours();
     let m = new Date().getMinutes();
     let s = new Date().getSeconds();
    return [`${h}:${m}`];
  }

  // onParent(val){
  //   console.log("From Child To parent",val);
    
  // }
  onParentEmp(obj){
    console.log(obj);
    this.id = obj.id;
    this.ename = obj.name;
    this.company = obj.company;
    this.tech = obj.tech;
  }
}
