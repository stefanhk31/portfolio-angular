import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPortfolioItem } from './portfolioItem';

import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private portfolioItemsSource = 'assets/api/portfolio/portfolio-items.json';

    constructor(private http: HttpClient) { }

    getPortfolioItems(): Observable<IPortfolioItem[]> {
        return this.http.get<IPortfolioItem[]>(this.portfolioItemsSource)
    }

  }

  /*
    getItem(id: string): Observable<IPortfolioItem | undefined> {
       return this.getPortfolioItems().pipe(
        map((items: IPortfolioItem[]) => items.find(i => i.itemID === id))
      ); 
    } */
 