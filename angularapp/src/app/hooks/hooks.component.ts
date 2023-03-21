import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit {
 
   @Input() parentData:number;;
  constructor() { 
    console.log('HooksComponent constructor called');
    
  }
  
  ngOnInit(): void {
    console.log('HooksComponent ngOnInit Called');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooksComponent ngonChanges called',changes);
    
  }

  

}
