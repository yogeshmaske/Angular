import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AuthGuard } from './auth.guard';
import { AudiComponent } from './car/audi/audi.component';
import { CarComponent } from './car/car.component';
import { FerrariComponent } from './car/ferrari/ferrari.component';
import { MercedesComponent } from './car/mercedes/mercedes.component';
import { RollsComponent } from './car/rolls/rolls.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { FashionComponent } from './fashion/fashion/fashion.component';
import { FashiondetailsComponent } from './fashion/fashiondetails/fashiondetails.component';
import { NewfashionComponent } from './fashion/newfashion/newfashion.component';
import { OldfashionComponent } from './fashion/oldfashion/oldfashion.component';
import { HomeComponent } from './home/home.component';
import HooksComponent from './hooks/hooks.component';
import { LoginformComponent } from './loginform/loginform.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { ResolveGuard } from './resolve.guard';
import { ResolveexampleComponent } from './resolveexample/resolveexample.component';
import { RxjsoperatorComponent } from './rxjsoperator/rxjsoperator.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './shopping/cart/cart.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { TodoComponent } from './todo/todo.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'product',canActivate:[AuthGuard],
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
  {path:'post',component:DemopostComponent},
  {path:'postdetails/:id',component:DemopostdetailsComponent},
  {path:'user',component:UserComponent},
  {path:'userdetails/:id',component:UserdetailsComponent},
  {path:'userpage',component:UserpageComponent},
  {path:'login',component:LoginformComponent},
  {path:'todo',component:TodoComponent},
  {path:'hook',component:HooksComponent},
  {path:'order',component:OrderlistComponent},
  {path:'fashion',
   children:[
    {path:'',component:FashionComponent},
    
    {path:'oldfashion',component:OldfashionComponent},
    {path:'newfashion',component:NewfashionComponent}
   ]},
   {path:'fashiondetails/:id',component:FashiondetailsComponent},
   
  
  //  this is egger loading
   //  {path:'customer',component:CustomerListComponent},
  //  {path:'admin',component:AdminListComponent},

  // Lazy Loading
  {path:'customer',loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
  {path:'search',component:SearchComponent},
  {path:'loginPage',component:LoginscreenComponent},
  {path:'shopping/cart',component:CartComponent},
  {path:'adduser',component:AdduserComponent,canDeactivate:[UnsavedchangesGuard]},
  {path:'resolve',component:ResolveexampleComponent,resolve:{data:ResolveGuard}},
  {path:'rxjs',component:RxjsoperatorComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
