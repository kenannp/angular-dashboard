import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDeliveryReceiptComponent } from './start-delivery-receipt.component';

describe('StartDeliveryReceiptComponent', () => {
  let component: StartDeliveryReceiptComponent;
  let fixture: ComponentFixture<StartDeliveryReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartDeliveryReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDeliveryReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
