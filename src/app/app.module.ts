import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatListModule, MatGridListModule, MatLineModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations:[
    AppComponent,
    MenuComponent
  ],
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
