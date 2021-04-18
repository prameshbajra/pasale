import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddShopComponent } from './add-shop.component';

describe('AddShopComponent', () => {
  let component: AddShopComponent;
  let fixture: ComponentFixture<AddShopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
