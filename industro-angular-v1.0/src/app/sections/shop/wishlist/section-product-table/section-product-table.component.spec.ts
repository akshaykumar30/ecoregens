import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProductTableComponent } from './section-product-table.component';

describe('SectionProductTableComponent', () => {
  let component: SectionProductTableComponent;
  let fixture: ComponentFixture<SectionProductTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProductTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
