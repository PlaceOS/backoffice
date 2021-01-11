import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObjectListFieldComponent } from './object-list-field.component';

describe('ObjectListFieldComponent', () => {
  let component: ObjectListFieldComponent;
  let fixture: ComponentFixture<ObjectListFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectListFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectListFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
