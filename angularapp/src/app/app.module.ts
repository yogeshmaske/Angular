import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { CardComponent } from './card/card.component';
import { PwsgenerateComponent } from './pwsgenerate/pwsgenerate.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { Ngfor1Component } from './ngfor1/ngfor1.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test1Component,
    Test2Component,
    TwowaybindComponent,
    CardComponent,
    PwsgenerateComponent,
    ChildtoparentComponent,
    NgforComponent,
    Ngfor1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
