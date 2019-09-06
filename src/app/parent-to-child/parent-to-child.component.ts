import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  template: `
  <router-outlet></router-outlet>
  <a routerLink="/parent-to-child/using-input">Using @Input</a>
  <br>
  <a routerLink="/parent-to-child/using-behavior-subject">Using Behavior Subject</a>
  `,
  styles: [``]
})
export class ParentToChildComponent {

  constructor() { }

}
