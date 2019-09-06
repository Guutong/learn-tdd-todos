import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './using-input/parent/parent.component';
import { DashboardComponent } from './using-behavior-subject/dashboard/dashboard.component';
import { ParentToChildComponent } from './parent-to-child.component';

const routes: Routes = [
  { path: '', component: ParentToChildComponent },
  {
    path: 'using-input',
    component: ParentComponent
  },
  {
    path: 'using-behavior-subject',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentToChildRoutingModule { }
