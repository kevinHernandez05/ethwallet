import { TestBed } from '@angular/core/testing';

import { EtherscanService } from './etherscan.service';

describe('EtherscanService', () => {
  let service: EtherscanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtherscanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
