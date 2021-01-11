import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DomainFormComponent } from './domain-form.component';

describe('DomainFormComponent', () => {
  let component: DomainFormComponent;
  let fixture: ComponentFixture<DomainFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
