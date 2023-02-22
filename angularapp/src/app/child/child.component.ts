import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  count:number = 0;
  constructor() { }

  ngOnInit() {
  }
 @Input() boxColor;
 @Input() placeHolderText;

 @Output() inputEvent = new EventEmitter();


 onCreate(inpVal){
    if (inpVal.value.length>0) {
      this.count = this.count+1;
      // alert(inpVal.value)
      this.inputEvent.emit(inpVal.value)
    }   
    }
   

}
