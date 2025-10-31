import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsHeaderComponentComponent } from './trends-header-component.component';

describe('TrendsHeaderComponentComponent', () => {
  let component: TrendsHeaderComponentComponent;
  let fixture: ComponentFixture<TrendsHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendsHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
