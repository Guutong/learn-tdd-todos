import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoAddComponent } from './todo-add.component';

describe('TodoAddComponent', () => {
  let component;

  beforeEach(() => {
    component = new TodoAddComponent();
  });

  it('should create todo form instance of FormGroup', () => {
    expect(component.todoForm instanceof FormGroup).toBe(true);
  });

  it('should create fields todo form', () => {
    expect(component.todoForm.controls.title.value).toEqual('');
    expect(component.todoForm.controls.detail.value).toEqual('');
    expect(component.todoForm.controls.category.value).toEqual('');
    expect(component.todoForm.get('title').value).toEqual('');
    expect(component.todoForm.get('detail').value).toEqual('');
    expect(component.todoForm.get('category').value).toEqual('');
  });
});
