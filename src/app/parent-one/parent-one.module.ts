import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOneComponent } from './components/parent-one/components/child-one/child-one.component';
import { ParentOneComponent } from './components/parent-one/parent-one.component';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [ChildOneComponent, ParentOneComponent]
})
export class ParentOneModule {
}
