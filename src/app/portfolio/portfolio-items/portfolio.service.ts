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
        return this.http.get<IPortfolioItem[]>(this.portfolioItemsSource).pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)
          )
    }

    private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  }

  /*
    getItem(id: string): Observable<IPortfolioItem | undefined> {
       return this.getPortfolioItems().pipe(
        map((items: IPortfolioItem[]) => items.find(i => i.itemID === id))
      ); 
    } */
 