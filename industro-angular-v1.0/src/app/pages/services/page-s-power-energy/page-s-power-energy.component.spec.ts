import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSPowerEnergyComponent } from './page-s-power-energy.component';

describe('PageSPowerEnergyComponent', () => {
  let component: PageSPowerEnergyComponent;
  let fixture: ComponentFixture<PageSPowerEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSPowerEnergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSPowerEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
