import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InspectorsComponent } from "./inspectors/inspectors.component"
import { HomeComponent } from "./home/home.component";
import { PriceServicesComponent } from './price-services/price-services.component';
import { ServiceAreaComponent } from './service-area/service-area.component';




export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'prices', component: PriceServicesComponent },
    { path: 'inspectors', component: InspectorsComponent },
    { path: 'service-area', component: ServiceAreaComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router)
