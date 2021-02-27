import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from "aws-amplify";
import { Auth } from '@aws-amplify/auth';
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);
Auth.configure(aws_exports);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
