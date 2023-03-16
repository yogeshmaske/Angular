import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule } from '@angular/router';
import { CustomerRoutingRoutingModule } from './customer-routing-routing.module';
// import { RouterModule, Routes } from '@angular/router';

// const customerRoutes:Routes=[
//   {path:'',component:CustomerListComponent}
// ]

@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomerRoutingRoutingModule
    
    // RouterModule.forChild(customerRoutes)
  ]
})
export class CustomerModule { 
  constructor(){

    console.log('Admin Loaded');
    
  }
}
