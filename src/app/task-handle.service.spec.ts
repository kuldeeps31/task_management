import { TestBed } from '@angular/core/testing';

import { TaskHandleService } from './task-handle.service';

describe('TaskHandleService', () => {
  let service: TaskHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
