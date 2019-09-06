import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMessage = 'This is message from parent';
  childMessage = '';

  constructor() { }


  ngOnInit() {
  }


  onChildSendMessage(event: string) {
    this.childMessage = event;
  }
}
