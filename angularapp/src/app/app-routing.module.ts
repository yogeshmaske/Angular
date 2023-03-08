import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AudiComponent } from './car/audi/audi.component';
import { CarComponent } from './car/car.component';
import { FerrariComponent } from './car/ferrari/ferrari.component';
import { MercedesComponent } from './car/mercedes/mercedes.component';
import { RollsComponent } from './car/rolls/rolls.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'product',
   children:[
    {path:'',component:ProductComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'mobile',component:MobileComponent},
    {path:'camera',component:CameraComponent},
    {path:'watch',component:WatchComponent}
   ]
  },
  {path:'car',
   children:[
    {path:'',component:CarComponent},
    {path:'audi',component:AudiComponent},
    {path:'ferrari',component:FerrariComponent},
    {path:'mercedes',component:MercedesComponent},
    {path:'rolls',component:RollsComponent}
   ]
  },
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
