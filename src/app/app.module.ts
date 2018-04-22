import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PalyersComponent } from './palyers/palyers.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    ReactiveFormComponent,
    PalyersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
