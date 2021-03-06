import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  {
    provide: 'HUE_BRIDGE_API_URL',
    useValue: environment.hueConfig.apiURL
  },
  {
    provide: 'HUE_USERNAME',
    useValue: environment.hueConfig.username
  }
]).bootstrapModule(AppModule)
  .catch(err => console.log(err));
