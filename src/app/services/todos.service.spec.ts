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
});
