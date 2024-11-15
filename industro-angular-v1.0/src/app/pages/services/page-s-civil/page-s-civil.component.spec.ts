import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSCivilComponent } from './page-s-civil.component';

describe('PageSCivilComponent', () => {
  let component: PageSCivilComponent;
  let fixture: ComponentFixture<PageSCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSCivilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
