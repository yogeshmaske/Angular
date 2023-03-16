import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OldfashionComponent } from './oldfashion/oldfashion.component';
import { NewfashionComponent } from './newfashion/newfashion.component';
import { FashionComponent } from './fashion/fashion.component';
import { RouterModule } from '@angular/router';
import { FashiondetailsComponent } from './fashiondetails/fashiondetails.component';



@NgModule({
  declarations: [OldfashionComponent, NewfashionComponent, FashionComponent, FashiondetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FashionModule { }
