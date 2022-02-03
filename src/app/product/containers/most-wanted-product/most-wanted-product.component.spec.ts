import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWantedProductComponent } from './most-wanted-product.component';

describe('MostWantedProductComponent', () => {
  let component: MostWantedProductComponent;
  let fixture: ComponentFixture<MostWantedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostWantedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostWantedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
