import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MetadataDetailsModalComponent } from './metadata-details-modal.component';

describe('MetadataDetailsModalComponent', () => {
  let component: MetadataDetailsModalComponent;
  let fixture: ComponentFixture<MetadataDetailsModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
