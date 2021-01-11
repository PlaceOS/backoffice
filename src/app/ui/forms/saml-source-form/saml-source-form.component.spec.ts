import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SamlSourceFormComponent } from './saml-source-form.component';

describe('SamlSourceFormComponent', () => {
  let component: SamlSourceFormComponent;
  let fixture: ComponentFixture<SamlSourceFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SamlSourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamlSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
