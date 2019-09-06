import { TestBed } from '@angular/core/testing';

import { ProgressService } from './progress.service';

describe('ProgressService', () => {

  let service: ProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 0 progress on init', () => {
    service.getProgress().subscribe(
      v => expect(v).toBe(0)
    );
  });

  it('should have 10 progress when single increase', () => {
    // act
    service.increase();
    // assert
    service.getProgress().subscribe(
      v => expect(v).toBe(10)
    );
  });

  it('should have 10 progress when single decrease', () => {
    // arrange: 30
    service.increase();
    service.increase();
    service.increase();
    // act
    service.decrease();
    // assert
    service.getProgress().subscribe(
      v => expect(v).toBe(20)
    );
  });

});
