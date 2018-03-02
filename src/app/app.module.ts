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
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatTooltipModule
 } from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { ServiceAreaComponent } from './service-area/service-area.component';
import { NguiMapModule } from '@ngui/map';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    InspectorsComponent,
    HomeComponent,
    NavbarComponent,
    PriceServicesComponent,
    FooterComponent,
    ServiceAreaComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule,
    FormsModule,
    MatSnackBarModule,
    routes,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatExpansionModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAglDddDEF-z2VmoKfCO_NHAeHL8fECOdU'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
