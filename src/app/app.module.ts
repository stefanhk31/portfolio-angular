import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootRoutingModule } from './root-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioItemsComponent } from './portfolio/portfolio-items/portfolio-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    WelcomeComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    ContentComponent,
    FooterComponent,
    PortfolioItemsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RootRoutingModule,
    RouterModule.forRoot([
      { path: 'contact', component: ContactComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'about', component: AboutComponent },
      { path: 'welcome', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
