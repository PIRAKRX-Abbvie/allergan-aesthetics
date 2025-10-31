import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersSectionComponent } from './careers-section.component';

describe('CareersSectionComponent', () => {
  let component: CareersSectionComponent;
  let fixture: ComponentFixture<CareersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
