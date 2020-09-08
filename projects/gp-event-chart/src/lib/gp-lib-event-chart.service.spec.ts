import { TestBed } from '@angular/core/testing';

import { GpLibEventChartService } from './gp-lib-event-chart.service';

describe('GpLibEventChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpLibEventChartService = TestBed.get(GpLibEventChartService);
    expect(service).toBeTruthy();
  });
});
