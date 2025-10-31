import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsIntroComponentComponent } from './trends-intro-component.component';

describe('TrendsIntroComponentComponent', () => {
  let component: TrendsIntroComponentComponent;
  let fixture: ComponentFixture<TrendsIntroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendsIntroComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsIntroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
