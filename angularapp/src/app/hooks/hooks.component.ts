

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild,DoCheck,ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DemoService } from '../service/demo.service';


@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export default class HooksComponent {
 

}
// export default class HooksComponent implements OnChanges, DoCheck,OnInit,AfterContentInit,
//                                                AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  
//    @ContentChild("child",{static:false}) contentChild: ElementRef;
//    @Input() parentData:string;
//    @ViewChild('childHook',{static:false}) viewChild: ElementRef
   
//    subscription: Subscription;
//    counter;
//    num:number=1;
//   constructor(private demoService:DemoService) { 
//     console.log('HooksComponent constructor called');
    
//   }
//   ngOnDestroy(): void {
//     console.log('on Destroy Called');
//     clearInterval(this.counter);
//     this.subscription.unsubscribe();
    
//   }
//   ngAfterViewChecked(): void {
    
//     this.viewChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
//   }
//   ngAfterViewInit(): void {
//     console.log('After View Init Called',this.viewChild);
//     this.viewChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
    
//   }
//   ngDoCheck(): void {
//     console.log('Do cheack called');
    
//   }
//   ngAfterContentChecked(): void {
//     console.log('Hooks component ng after content Cheacked called',this.parentData)
//     this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
//   }

//   ngAfterContentInit(): void {
//     console.log('Hooks component ng after content called',this.parentData);
//     this.contentChild.nativeElement.setAttribute('style','color:green');
   
//     //  This will not work here dynamically
//     // this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`)
    
//   }

  
//   ngOnInit(): void {
//     console.log('HooksComponent ngOnInit Called');
//     this.subscription = this.demoService.getUsers().subscribe(res=>{
//       console.log('users from hooks component',res);
      
//     });

//   //  this.counter = setInterval(()=>{
//   //     this.num = this.num +1;
//   //     console.log(this.num);
      
//   //   },1000)
    
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     console.log('HooksComponent ngonChanges called',changes);
    
//   }

  

// }
