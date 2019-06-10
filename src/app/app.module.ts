import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Item1Component } from './portfolio/portfolio-items/item1/item1.component';
import { Item2Component } from './portfolio/portfolio-items/item2/item2.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    WelcomeComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    Item1Component,
    Item2Component,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'contact', component: ContactComponent },
      { path: 'portfolio', component: PortfolioComponent, children: [
        { path: 'item1', component: Item1Component },
        { path: 'item2', component: Item2Component }
      ] },
      { path: 'about', component: AboutComponent },
      { path: 'welcome', redirectTo: '', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
