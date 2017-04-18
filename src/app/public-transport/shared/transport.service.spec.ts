/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransportService } from './transport.service';

describe('TransportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportService]
    });
  });

  it('should ...', inject([TransportService], (service: TransportService) => {
    expect(service).toBeTruthy();
  }));
});
