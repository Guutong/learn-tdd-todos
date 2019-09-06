import { NgModule } from '@angular/core';
import { ParentComponent } from './using-input/parent/parent.component';
import { ChildComponent } from './using-input/child/child.component';
import { ProgressBarComponent } from './using-behavior-subject/progress-bar/progress-bar.component';
import { InputComponent } from './using-behavior-subject/input/input.component';
import { DashboardComponent } from './using-behavior-subject/dashboard/dashboard.component';
import { ParentToChildRoutingModule } from './parent-to-child-routing.module';
import { CommonModule } from '@angular/common';
import { ParentToChildComponent } from './parent-to-child.component';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    ProgressBarComponent,
    InputComponent,
    DashboardComponent,
    ParentToChildComponent
  ],
  imports: [
    CommonModule,
    ParentToChildRoutingModule
  ],
  providers: []
})
export class ParentToChildModule { }
