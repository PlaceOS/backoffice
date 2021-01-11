import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RepositoryFormComponent } from './repository-form.component';

describe('RepositoryFormComponent', () => {
  let component: RepositoryFormComponent;
  let fixture: ComponentFixture<RepositoryFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
