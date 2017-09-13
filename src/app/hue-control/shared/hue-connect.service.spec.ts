import { TestBed, inject } from '@angular/core/testing';

import { HueConnectService } from './hue-connect.service';

describe('HueConnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HueConnectService]
    });
  });

  it('should be created', inject([HueConnectService], (service: HueConnectService) => {
    expect(service).toBeTruthy();
  }));
});
