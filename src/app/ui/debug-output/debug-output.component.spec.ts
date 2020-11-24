import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DebugOutputComponent } from './debug-output.component';

describe('DebugOutputComponent', () => {
  let component: DebugOutputComponent;
  let fixture: ComponentFixture<DebugOutputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
