import { TestBed } from '@angular/core/testing';

import { BasicAuthInterceptorInterceptor } from './basic-auth-interceptor.interceptor';

describe('BasicAuthInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BasicAuthInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BasicAuthInterceptorInterceptor = TestBed.inject(BasicAuthInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
