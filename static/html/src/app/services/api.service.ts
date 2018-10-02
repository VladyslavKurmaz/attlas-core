import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, retry } from 'rxjs/operators';
import { of } from 'rxjs';

import { environment } from './../../environments/environment';

import { Item, ItemResponse } from './../models/item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getItems(url: string): Observable<Item> {
    const options = {
      /*headers:new HttpHeaders ({
        "Content-Type": "application/json"
      }),*/
      withCredentials: true
    };
    return this.http.get<ItemResponse>(`${environment.services.api.apiUrl}${url}`, options)
      .pipe(
        map(res => {
          return res.data;
        }),
        catchError(this.handleError<Item>('getItems', undefined))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error); // log to console instead
      throw new Error(operation + ' failed'); // use this for subscribe(error:) to fire
      // Let the app keep running by returning an empty result.
      // return of(result as T);
    };
  }

}
