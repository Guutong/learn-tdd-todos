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
    expect(component.todoForm.controls.id.value).toEqual(0);
    expect(component.todoForm.controls.title.value).toEqual('');
    expect(component.todoForm.controls.detail.value).toEqual('');
    expect(component.todoForm.controls.category.value).toEqual('');
    expect(component.todoForm.controls.status.value).toEqual(false);
    expect(component.todoForm.get('id').value).toEqual(0);
    expect(component.todoForm.get('title').value).toEqual('');
    expect(component.todoForm.get('detail').value).toEqual('');
    expect(component.todoForm.get('category').value).toEqual('');
    expect(component.todoForm.get('status').value).toEqual(false);
  });

  it('should invalid fields when input empty title, detail, category fields', () => {
    component.todoForm.controls.id.setValue(0);
    component.todoForm.controls.title.setValue('');
    component.todoForm.controls.detail.setValue('');
    component.todoForm.controls.category.setValue('');
    component.todoForm.controls.status.setValue(false);
    expect(component.todoForm.invalid).toBe(true);
  });

  it('should valid fields when input title, detail, category fields', () => {
    component.todoForm.controls.id.setValue(1);
    component.todoForm.controls.title.setValue('title');
    component.todoForm.controls.detail.setValue('detail');
    component.todoForm.controls.category.setValue('category1');
    component.todoForm.controls.status.setValue(false);
    expect(component.todoForm.valid).toBe(true);
  });
});
