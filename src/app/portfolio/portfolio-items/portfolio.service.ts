import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPortfolioItem } from './portfolioItem';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private portfolioItemsSource = 'assets/api/portfolio/portfolio-items.json';

    constructor(private http: HttpClient) { }

    getPortfolioItems(): Observable<IPortfolioItem[]> {
        return this.http.get<IPortfolioItem[]>(this.portfolioItemsSource)
    }

    getItem(id: string): Observable<IPortfolioItem | undefined> {
      return this.getPortfolioItems().pipe(
       map((items: IPortfolioItem[]) => items.find(i => i.id === id))
     ); 
   }

  }



 