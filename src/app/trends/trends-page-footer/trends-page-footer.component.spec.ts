import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsPageFooterComponent } from './trends-page-footer.component';

describe('TrendsPageFooterComponent', () => {
  let component: TrendsPageFooterComponent;
  let fixture: ComponentFixture<TrendsPageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendsPageFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
