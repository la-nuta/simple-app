import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ParentOneModule } from './parent-one/parent-one.module';
import { ParentsService } from './core/servises/parents.service';
import { ParentTwoComponent } from './parent-two/components/parent-two/parent-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ParentTwoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    ParentOneModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ParentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
