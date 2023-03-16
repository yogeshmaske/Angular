import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  isClicked=false;
  todoList: any = [];
  todo;
  // DI 
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.listToDos();
  }

  createTodo(inputTitle,inputContent) {
    console.log(inputTitle.value);
    console.log(inputContent.value);
    
    let todo = {
     
            id:new Date().getTime(),
            title:inputTitle.value,
            content:inputContent.value    
    }
    inputContent.value='';
    inputTitle.value='';

    this.todoService.create(todo).subscribe((response) => {
      console.log('todo create', response);
      this.listToDos();
    }, (error => {
      console.log(error)
    }))
  }

  listToDos() {
    this.todoService.list().subscribe((res) => {
      console.log(res)
      this.todoList = res;
    }, (error=> {
      console.log(error);
    }))
  }

  editClicked(td:any){
    this.isClicked=true;
    this.todo =td;
  }
  editTodo(inputTitle,inputContent) {
    // this.isClicked=true;
    let editData = {
      id:new Date().getTime(),
      title:inputTitle.value,
      content:inputContent.value 
    }

    this.todoService.update(this.todo.id, editData).subscribe(res=> {
      this.listToDos();
    })
    this.isClicked=false;
  }

  deleteTodo(id: any) {
    this.todoService.delete(id).subscribe(res => {
      console.log('Record has been deleted');
      this.listToDos();
    })
  }
  // url=' http://localhost:3000';

  // todo: any;
  // constructor(private todoService:TodoService) { }

  // ngOnInit() {
  // }

  // create(){
  //  let  data = {
  //     id:new Date().getTime(),
  //     title:'Fromat Data',
  //     content:'this is data.json'
  //   }
  //    this.todoService.createData(data).subscribe(res=>{
  //     console.log(' local data post ',res);
      
  //    })
     
  // }

  // getDataFromLocal(){
  //   this.todoService.getData().subscribe(res=>{
  //     console.log('Data From Local',res); 
  //     this.todo = res;
  //   })

  //   console.log('Data From Todo Array in Component',this.todo);
    
  // }

  // removeData(){
  //   this.todo.splice(this.todo.length-1,1);
  // }

}
