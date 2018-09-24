import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, retry } from 'rxjs/operators';
import { of } from 'rxjs';

import { Contact, ContactsResponse } from './../models/contact';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  getProviders(): Observable<Contact[]> {
    localStorage.removeItem(environment.storage.token);
    const options = {
      /*headers:new HttpHeaders ({
        "Content-Type": "application/json"
      }),*/
      withCredentials: true
    };
    return this.http.get<ContactsResponse>(this.getEndpoint('/contacts'), options)
      .pipe(
        map(res => {
          const p = res.data.find(provider => provider.active);
          if (p) {
            localStorage.setItem(environment.storage.token, 'authenticated');
          }
          console.log(res);
          return res.data;
        }),
        catchError(this.handleError<Contact[]>('getProviders', undefined))
      );
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem(environment.storage.token)) {
      return true;
    }
    return false;
  }

  getProviderBindLink(providerId: string, redirect: string) {
    return this.getEndpoint(`/goals/auth/${providerId}?redirect=${environment.self}${redirect}`);
  }

  private getEndpoint(endpoint: string): string {
    return `${environment.services.bind.apiUrl}${endpoint}`;
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
