import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSChemicalComponent } from './page-s-chemical.component';

describe('PageSChemicalComponent', () => {
  let component: PageSChemicalComponent;
  let fixture: ComponentFixture<PageSChemicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSChemicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSChemicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
