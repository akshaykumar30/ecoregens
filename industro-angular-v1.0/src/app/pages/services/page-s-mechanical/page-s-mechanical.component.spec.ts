import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSMechanicalComponent } from './page-s-mechanical.component';

describe('PageSMechanicalComponent', () => {
  let component: PageSMechanicalComponent;
  let fixture: ComponentFixture<PageSMechanicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSMechanicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSMechanicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
