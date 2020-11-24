import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BulkItemModalComponent } from './bulk-item-modal.component';

describe('BulkItemModalComponent', () => {
  let component: BulkItemModalComponent;
  let fixture: ComponentFixture<BulkItemModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
