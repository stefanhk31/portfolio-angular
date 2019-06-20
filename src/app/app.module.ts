import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemsComponent } from './portfolio/portfolio-items/portfolio-items.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { RootRoutingModule } from './root-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    WelcomeComponent,
    PortfolioComponent,
    PortfolioItemsComponent,
    ContactComponent,
    AboutComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'welcome', redirectTo: '', pathMatch: 'full' }
    ]),
    PortfolioModule,
    //RootRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
