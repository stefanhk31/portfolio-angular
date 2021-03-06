import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudyComponent } from './case-study/case-study.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CaseStudyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'portfolio/case-study/:id', component: CaseStudyComponent,  data: { animation: 'CaseStudy' } }
    ])
  ]
})
export class PortfolioModule { }
