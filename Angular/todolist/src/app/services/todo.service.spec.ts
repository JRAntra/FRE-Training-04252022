import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  const testTodolist = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TodoService);
  });

  it('should get todos by trigger the getTodos method', () => {
    spyOn(service, 'getTodos').withArgs().and.returnValues(of(testTodolist));

    service.getTodos().subscribe((data) => {
      expect(data).toEqual(testTodolist);
    });
    expect(service.getTodos).toHaveBeenCalledTimes(1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
