import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent-to-child/using-input/parent/parent.component';
import { DashboardComponent } from './parent-to-child/using-behavior-subject/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'todos',
    loadChildren: 'src/app/todos/todos.module#TodosModule'
  },
  {
    path: 'parent-to-child',
    loadChildren: 'src/app/parent-to-child/parent-to-child.module#ParentToChildModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
