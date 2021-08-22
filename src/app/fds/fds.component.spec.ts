import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDsComponent } from './fds.component';

describe('FDsComponent', () => {
  let component: FDsComponent;
  let fixture: ComponentFixture<FDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
