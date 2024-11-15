import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageError405Component } from './page-error405.component';

describe('PageError405Component', () => {
  let component: PageError405Component;
  let fixture: ComponentFixture<PageError405Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageError405Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageError405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
