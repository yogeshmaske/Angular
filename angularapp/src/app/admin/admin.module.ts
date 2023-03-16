import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';


// const adminRoutes: Routes = [
//   {path:'',component:AdminListComponent}
// ]
@NgModule({
  declarations: [AdminListComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
    // RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule {

  constructor(){

    console.log('Admin Loaded');
    
  }
 }
