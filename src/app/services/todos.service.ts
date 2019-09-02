import { Injectable } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos = [];
  constructor() { }

  add(item) {
    this.todos.push(item);
  }

  delete(item) {
    this.todos = this.todos.filter((e: any) => e.id !== item.id);
  }

  update(item) {
    this.todos = this.todos.map((e: any) => {
      if (e.id === item.id) {
        e = item;
      }
      return e;
    });
  }
}
