import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


const routes: Routes = [
    { path: 'portfolio/case-study/:itemID', redirectTo: 'portfolio/case-study/:itemID', pathMatch: 'full' },
    { path: 'portfolio', redirectTo: 'portfolio', pathMatch: 'full' },
    { path: 'contact', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'about', redirectTo: 'about', pathMatch: 'full' },
    { path: 'welcome', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RootRoutingModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}