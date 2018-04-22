import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {  MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';


import { AppComponent } from './app.component';



@NgModule({
  declarations:[
    AppComponent
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
