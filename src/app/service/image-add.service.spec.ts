import { TestBed } from '@angular/core/testing';

import { ImageAddService } from './image-add.service';

describe('ImageAddService', () => {
  let service: ImageAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
