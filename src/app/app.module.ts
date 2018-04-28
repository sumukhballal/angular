import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatListModule, MatGridListModule, MatLineModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePipe } from '@angular/common';
import {MatCommonModule } from '@angular/material';

import 'hammerjs';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from './services/dish.service';

@NgModule({
  declarations:[
    AppComponent,
    MenuComponent,
    DishdetailComponent
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
    MatButtonModule,
    MatCommonModule
  ],
  providers:[DishService], //angulars DI, will create dishservice wherever required.
  bootstrap:[AppComponent]
})
export class AppModule { }
