import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { CardComponent } from './card/card.component';
import { PwsgenerateComponent } from './pwsgenerate/pwsgenerate.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { Ngfor1Component } from './ngfor1/ngfor1.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { Ngstyle1Component } from './ngstyle1/ngstyle1.component';
import { Exersise1Component } from './exersise1/exersise1.component';
import { ChildComponent } from './child/child.component';
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// matarial
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TemplateformComponent } from './templateform/templateform.component';
import { Templateform1Component } from './templateform1/templateform1.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Templateform2Component } from './templateform2/templateform2.component';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';

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
    Ngfor1Component,
    NgifComponent,
    NgswitchComponent,
    NgstyleComponent,
    NgclassComponent,
    Ngstyle1Component,
    Exersise1Component,
    ChildComponent,
    CustomDirective,
    TemplateformComponent,
    Templateform1Component,
    ReactiveformComponent,
    Templateform2Component,
    Reactiveform1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
