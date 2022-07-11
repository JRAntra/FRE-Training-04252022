import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  let baseUrl = 'https://jsonplaceholder.typicode.com';
  let path = 'todos';

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
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should get todos by trigger the getTodos method', (done) => {
    service.getTodos().subscribe((data) => {
      expect(data).toEqual(testTodolist);
      done();
    });

    const req = httpMock.expectOne([baseUrl, path].join('/'));
    expect(req.request.method).toBe('GET');
    req.flush(testTodolist);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
