import { TestBed } from '@angular/core/testing';

import { GetFoodDataService } from './get-food-data.service';

describe('GetFoodDataService', () => {
  let service: GetFoodDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFoodDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
