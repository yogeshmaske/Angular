import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
 
     color:string = 'red';
    sty= {'color':'red','background-color':'gray'}
  constructor() { }

  ngOnInit() {
  }

}
