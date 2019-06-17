import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'contact', redirectTo: '/contact', pathMatch: 'full' },
    { path: 'portfolio', redirectTo: '/portfolio', pathMatch: 'full'},
    { path: 'about', redirectTo: '/about', pathMatch: 'full'},
    { path: 'welcome', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RootRoutingModule {

}