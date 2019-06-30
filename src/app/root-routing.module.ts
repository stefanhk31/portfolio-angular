import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemsComponent } from './portfolio/portfolio-items/portfolio-items.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent, data: { animation: 'About' } },
    { path: 'contact', component: ContactComponent, data: { animation: 'Contact' } },
    { path: 'portfolio', component: PortfolioComponent, data: { animation: 'Portfolio' } },
    { path: '', component: WelcomeComponent, data: { animation: 'Welcome' } }

];

@NgModule({
    declarations: [
        WelcomeComponent,
        AboutComponent,
        ContactComponent,
        PortfolioComponent,
        PortfolioItemsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
        exports: [RouterModule]
})
export class RootRoutingModule {

}