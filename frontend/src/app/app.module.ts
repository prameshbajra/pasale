import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ResisterloginComponent } from './components/resisterlogin/resisterlogin.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { PrimeModule } from "./prime.module";
import { ShopListComponent } from './components/landing/shop-list/shop-list.component';
import { AddShopComponent } from './components/landing/add-shop/add-shop.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        ResisterloginComponent,
        ShopListComponent,
        AddShopComponent
    ],
    imports: [
        AppRoutingModule,
        AmplifyUIAngularModule,
        BrowserModule,
        BrowserAnimationsModule,
        PrimeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
