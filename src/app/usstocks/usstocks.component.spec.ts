import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USStocksComponent } from './usstocks.component';

describe('USStocksComponent', () => {
  let component: USStocksComponent;
  let fixture: ComponentFixture<USStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(USStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
