import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { UtilityModule } from '../shared/utility/utility.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [OrderlistComponent,OrderlistComponent],
  imports: [
    CommonModule,
    UtilityModule,
    RouterModule
  ]
})
export class OrdersModule { }
