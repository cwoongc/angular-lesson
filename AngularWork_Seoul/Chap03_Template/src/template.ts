import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TemplateModule } from './app/template.module';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TemplateModule)
    .catch(err=>console.log(err));

