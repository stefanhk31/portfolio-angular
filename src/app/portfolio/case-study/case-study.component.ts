import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPortfolioItem } from '../portfolio-items/portfolioItem';
import { PortfolioService } from '../portfolio-items/portfolio.service';


@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {

  item: IPortfolioItem | undefined;

  constructor(private portfolioService: PortfolioService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
  
    const param = this.route.snapshot.paramMap.get('itemID');
    if (param) {
      this.getItem(param);
    }

  }

  getItem (itemID: string) {
    this.portfolioService.getItem(itemID).subscribe(
      item => this.item = item,
      );
  }

  onBack(): void {
    this.router.navigate(['/portfolio']);
  }

}
