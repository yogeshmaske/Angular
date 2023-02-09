import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css']
})
export class ChildtoparentComponent implements OnInit {

  @Output() empFromChlid:EventEmitter<object> = new EventEmitter();

  employee={
    id:101,
    name:"Abc",
    company:"Codemind",
    tech:"Angular"
  }

  constructor() { }

  ngOnInit() {
  }

  sendToParent(){
    this.empFromChlid.emit(this.employee);
  }
}
