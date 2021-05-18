import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatchFieldsComponent } from './match-fields.component';

describe('MatchFieldsComponent', () => {
  let component: MatchFieldsComponent;
  let fixture: ComponentFixture<MatchFieldsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
