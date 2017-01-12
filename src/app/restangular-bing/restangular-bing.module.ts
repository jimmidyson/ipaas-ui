import { NgModule, OpaqueToken } from '@angular/core';

import { Restangular } from 'ng2-restangular';

export const RESTANGULAR_BING = new OpaqueToken('RestangularBing');
export function RestangularBingFactory(restangular: Restangular) {
  console.log('restangular-bing');

  return restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl('http://www.bing.com');
  });
}

@NgModule({
  providers: [
    { provide: RESTANGULAR_BING, useFactory: RestangularBingFactory, deps: [Restangular] }
  ],
})
export class RestangularBingModule { }
