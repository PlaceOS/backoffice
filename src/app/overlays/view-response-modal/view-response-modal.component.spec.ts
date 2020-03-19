import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResponseModalComponent } from './view-response-modal.component';

describe('ViewResponseModalComponent', () => {
  let component: ViewResponseModalComponent;
  let fixture: ComponentFixture<ViewResponseModalComponent>;

  beforeEach(async(() => {
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
