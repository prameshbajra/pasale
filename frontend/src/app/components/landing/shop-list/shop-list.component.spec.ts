import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShopListComponent } from './shop-list.component';

describe('ShopListComponent', () => {
  let component: ShopListComponent;
  let fixture: ComponentFixture<ShopListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
