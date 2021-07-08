import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZoneFormComponent } from './zone-form.component';

describe('ZoneFormComponent', () => {
  let component: ZoneFormComponent;
  let fixture: ComponentFixture<ZoneFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
