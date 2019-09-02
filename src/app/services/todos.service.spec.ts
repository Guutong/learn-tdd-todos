import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;
  beforeEach(() => {
    service = new TodosService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should todos instance of Array', () => {
    expect(service.todos instanceof Array).toBe(true);
  });

  it('should have 1 item when add todo 1 item', () => {
    const item = { id: 1, title: 'title', detail: 'detail', category: 'category 1' };

    service.add(item);

    expect(service.todos.length).toBe(1);
    expect(service.todos).toEqual([{ id: 1, title: 'title', detail: 'detail', category: 'category 1' }]);
  });
});
