import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AestheticEthicsReportComponent } from './aesthetic-ethics-report.component';

describe('AestheticEthicsReportComponent', () => {
  let component: AestheticEthicsReportComponent;
  let fixture: ComponentFixture<AestheticEthicsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AestheticEthicsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AestheticEthicsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
