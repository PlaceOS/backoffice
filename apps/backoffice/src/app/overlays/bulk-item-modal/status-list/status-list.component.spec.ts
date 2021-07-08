import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatusListComponent } from './status-list.component';

describe('StatusListComponent', () => {
  let component: StatusListComponent;
  let fixture: ComponentFixture<StatusListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
