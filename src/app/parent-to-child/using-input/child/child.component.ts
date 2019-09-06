import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string;

  @Output() sendMessageToParent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hi() {
    this.sendMessageToParent.emit('Hi parent!');
  }

}
