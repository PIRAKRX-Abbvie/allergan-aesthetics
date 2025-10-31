import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesSectionComponent } from './references-section.component';

describe('ReferencesSectionComponent', () => {
  let component: ReferencesSectionComponent;
  let fixture: ComponentFixture<ReferencesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
