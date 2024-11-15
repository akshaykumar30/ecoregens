import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIconFontsComponent } from './page-icon-fonts.component';

describe('PageIconFontsComponent', () => {
  let component: PageIconFontsComponent;
  let fixture: ComponentFixture<PageIconFontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageIconFontsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIconFontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
