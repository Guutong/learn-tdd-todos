import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos = [];
  constructor() { }


  add(item) {
    this.todos.push(item);
  }
}
