import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DuplicateModalComponent } from './duplicate-modal.component';

describe('DuplicateModalComponent', () => {
  let component: DuplicateModalComponent;
  let fixture: ComponentFixture<DuplicateModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
