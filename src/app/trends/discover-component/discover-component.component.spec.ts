import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverComponentComponent } from './discover-component.component';

describe('DiscoverComponentComponent', () => {
  let component: DiscoverComponentComponent;
  let fixture: ComponentFixture<DiscoverComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
