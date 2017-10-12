import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { CommonModule } from '@angular/common';
import { InspectorsComponent } from './inspectors/inspectors.component';
import { ng2Parallax  } from 'ang2-parallax/ng2parallax';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PriceServicesComponent } from './price-services/price-services.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule
 } from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { ServiceAreaComponent } from './service-area/service-area.component';

@NgModule({
  declarations: [
    AppComponent,
    InspectorsComponent,
    HomeComponent,
    NavbarComponent,
    PriceServicesComponent,
    FooterComponent,
    ServiceAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    routes,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
