import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentTwoComponent } from './parent-two/components/parent-two/parent-two.component';
import { ParentOneComponent } from './parent-one/components/parent-one/parent-one.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'parent-one',
    component: ParentOneComponent
  },
  {
    path: 'parent-two',
    component: ParentTwoComponent
  },
  {
    path: '',
    redirectTo: '/parent-two', pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
