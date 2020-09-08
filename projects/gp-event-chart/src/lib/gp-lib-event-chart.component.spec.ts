import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpLibEventChartComponent } from './gp-lib-event-chart.component';

describe('GpLibEventChartComponent', () => {
  let component: GpLibEventChartComponent;
  let fixture: ComponentFixture<GpLibEventChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpLibEventChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpLibEventChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
