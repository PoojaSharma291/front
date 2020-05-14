import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

//Services
import { RequestService } from './core/service/request.service';
import { CitiesService } from './core/service/cities.service';


import {Message} from 'primeng//api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    FeatureModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RequestService,CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
