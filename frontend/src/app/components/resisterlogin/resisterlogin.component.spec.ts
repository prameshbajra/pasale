import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResisterloginComponent } from './resisterlogin.component';

describe('ResisterloginComponent', () => {
  let component: ResisterloginComponent;
  let fixture: ComponentFixture<ResisterloginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResisterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResisterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
