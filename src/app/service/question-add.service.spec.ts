import { TestBed } from '@angular/core/testing';

import { QuestionAddService } from './question-add.service';

describe('QuestionAddService', () => {
  let service: QuestionAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
