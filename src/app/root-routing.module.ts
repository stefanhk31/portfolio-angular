import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemsComponent } from './portfolio/portfolio-items/portfolio-items.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    //{ path: 'portfolio', component: PortfolioComponent },
    { path: '', component: WelcomeComponent }

];

@NgModule({
    declarations: [
        WelcomeComponent,
        AboutComponent,
        ContactComponent,
        //PortfolioComponent,
        //PortfolioItemsComponent
    ],
    imports: [
        RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class RootRoutingModule {

}