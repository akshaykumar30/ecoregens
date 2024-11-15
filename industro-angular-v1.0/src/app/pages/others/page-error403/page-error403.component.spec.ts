import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageError403Component } from './page-error403.component';

describe('PageError403Component', () => {
  let component: PageError403Component;
  let fixture: ComponentFixture<PageError403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageError403Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageError403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
