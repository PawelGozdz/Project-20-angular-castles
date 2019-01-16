import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NationalTrustComponent } from './national-trust/national-trust.component';
import { EnglishHeritageComponent } from './english-heritage/english-heritage.component';
import { HhaComponent } from './hha/hha.component';
import { NPropertyComponent } from './national-trust/n-property/n-property.component';
import { EPropertyComponent } from './english-heritage/e-property/e-property.component';
import { HPropertyComponent } from './hha/h-property/h-property.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NService } from './services/national-trust.service';
import { EService } from './services/english-heritage.service';
import { HService } from './services/hha.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NationalTrustComponent,
    EnglishHeritageComponent,
    HhaComponent,
    NPropertyComponent,
    EPropertyComponent,
    HPropertyComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [NService, EService, HService],
  bootstrap: [AppComponent]
})
export class AppModule { }
