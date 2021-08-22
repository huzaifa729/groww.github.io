import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DabirComponent } from './dabir.component';

describe('DabirComponent', () => {
  let component: DabirComponent;
  let fixture: ComponentFixture<DabirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DabirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DabirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
