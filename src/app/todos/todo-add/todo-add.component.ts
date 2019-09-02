import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    title: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    status: new FormControl(false, [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
  }

}
