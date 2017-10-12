import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { HomeComponent } from "./home/home.component";
import { PriceServicesComponent } from './price-services/price-services.component'
import { FaqComponent } from './faq/faq.component'




export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'prices', component: PriceServicesComponent },
    { path: 'faq', component: FaqComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router)
