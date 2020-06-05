import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFieldsComponent } from './match-fields.component';

describe('MatchFieldsComponent', () => {
  let component: MatchFieldsComponent;
  let fixture: ComponentFixture<MatchFieldsComponent>;

  beforeEach(async(() => {
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
