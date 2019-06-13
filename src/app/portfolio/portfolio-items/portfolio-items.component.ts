import { Component, OnInit } from '@angular/core';
import { IPortfolioItem } from './portfolioItem';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss']
})
export class PortfolioItemsComponent implements OnInit {

  items: IPortfolioItem[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.items = this.portfolioService.getPortfolioItems();
  }

}
