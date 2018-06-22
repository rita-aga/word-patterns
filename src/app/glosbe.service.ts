import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})


export class GlosbeService {

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Unsuccessful request');
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  // Forward query object to backend to call API
  sendQuery(data): Observable<any> {
    console.log(data);
    return this.http.post(apiUrl + '/q', data, httpOptions)
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  // Get Glosbe API's returned results
  getTranslations(): Observable<any> {
    return this.http.get(apiUrl + '/glosbe', httpOptions)
    .pipe(
      map(this.extractData),
      catchError(this.handleError));
    }
  constructor(private http: HttpClient) { }
}
