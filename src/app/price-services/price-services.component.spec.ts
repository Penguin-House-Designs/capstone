import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceServicesComponent } from './price-services.component';

describe('PriceServicesComponent', () => {
  let component: PriceServicesComponent;
  let fixture: ComponentFixture<PriceServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
