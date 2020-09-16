import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdapSourceFormComponent } from './ldap-source-form.component';

describe('LdapSourceFormComponent', () => {
  let component: LdapSourceFormComponent;
  let fixture: ComponentFixture<LdapSourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdapSourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdapSourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
