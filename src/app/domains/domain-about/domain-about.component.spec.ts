import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainAboutComponent } from './domain-about.component';

describe('DomainAboutComponent', () => {
  let component: DomainAboutComponent;
  let fixture: ComponentFixture<DomainAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
