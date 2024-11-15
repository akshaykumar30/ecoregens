import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGetInTouchComponent } from './section-get-in-touch.component';

describe('SectionGetInTouchComponent', () => {
  let component: SectionGetInTouchComponent;
  let fixture: ComponentFixture<SectionGetInTouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGetInTouchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGetInTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
