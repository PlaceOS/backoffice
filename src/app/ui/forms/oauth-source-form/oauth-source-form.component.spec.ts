import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthSourceFormComponent } from './oauth-source-form.component';

describe('OauthSourceFormComponent', () => {
  let component: OauthSourceFormComponent;
  let fixture: ComponentFixture<OauthSourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OauthSourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
