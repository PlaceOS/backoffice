import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewResponseModalComponent } from './view-response-modal.component';

describe('ViewResponseModalComponent', () => {
  let component: ViewResponseModalComponent;
  let fixture: ComponentFixture<ViewResponseModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResponseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResponseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
