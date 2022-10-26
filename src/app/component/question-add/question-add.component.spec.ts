import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAddComponent } from './question-add.component';

describe('QuestionAddComponent', () => {
  let component: QuestionAddComponent;
  let fixture: ComponentFixture<QuestionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
