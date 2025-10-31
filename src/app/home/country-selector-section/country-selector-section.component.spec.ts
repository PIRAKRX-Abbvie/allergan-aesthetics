import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectorSectionComponent } from './country-selector-section.component';

describe('CountrySelectorSectionComponent', () => {
  let component: CountrySelectorSectionComponent;
  let fixture: ComponentFixture<CountrySelectorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySelectorSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySelectorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
