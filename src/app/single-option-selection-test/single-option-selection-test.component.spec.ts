import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOptionSelectionTestComponent } from './single-option-selection-test.component';

describe('SingleOptionSelectionTestComponent', () => {
  let component: SingleOptionSelectionTestComponent;
  let fixture: ComponentFixture<SingleOptionSelectionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOptionSelectionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOptionSelectionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
