import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInnerBannerComponent } from './section-inner-banner.component';

describe('SectionInnerBannerComponent', () => {
  let component: SectionInnerBannerComponent;
  let fixture: ComponentFixture<SectionInnerBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInnerBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInnerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
