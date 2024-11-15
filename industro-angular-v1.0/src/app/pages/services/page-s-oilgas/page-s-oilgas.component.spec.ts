import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSOilgasComponent } from './page-s-oilgas.component';

describe('PageSOilgasComponent', () => {
  let component: PageSOilgasComponent;
  let fixture: ComponentFixture<PageSOilgasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSOilgasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSOilgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
