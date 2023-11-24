import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Point } from './point';
import { MessageService } from './message.service';


@Injectable()
export class PointService {

  private pointsUrl = 'http://localhost:8080/api/v1/points/getPoints';  // URL to web api
  private pointUrl = 'http://localhost:8080/api/v1/points/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET points from the server */
  getPoints(): Observable<Point[]> {
    const url = `${this.pointsUrl}/all`;
    return this.http.get<Point[]>(this.pointsUrl)
      .pipe(
        tap(_ => this.log('fetched points')),
        catchError(this.handleError<Point[]>('all', []))
      );
  }

  /** GET point by id. Return `undefined` when id not found */
  getPointNo404<Data>(id: number): Observable<Point> {
    const url = `${this.pointUrl}/?id=${id}`;
    return this.http.get<Point[]>(url)
      .pipe(
        map(points => points[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} point id=${id}`);
        }),
        catchError(this.handleError<Point>(`getPoint id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getPoint(id: number): Observable<Point> {
    const url = `${this.pointUrl}${id}`;
    return this.http.get<Point>(url).pipe(
      tap(_ => this.log(`fetched point id=${id}`)),
      catchError(this.handleError<Point>(`getPoint id=${id}`))
    );
  }

  /* GET points whose name contains search term */
  searchPoints(term: string): Observable<Point[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Point[]>(`${this.pointsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found points matching "${term}"`) :
        this.log(`no points matching "${term}"`)),
      catchError(this.handleError<Point[]>('searchPoints', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addPoint(point: Point): Observable<Point> {
    return this.http.post<Point>(this.pointsUrl, point, this.httpOptions).pipe(
      tap((newPoint: Point) => this.log(`added point w/ id=${newPoint.id}`)),
      catchError(this.handleError<Point>('addPoint'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePoint(id: number): Observable<Point> {
    const url = `${this.pointsUrl}/${id}`;

    return this.http.delete<Point>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted point id=${id}`)),
      catchError(this.handleError<Point>('deletePoint'))
    );
  }

  /** PUT: update the hero on the server */
  updatePoint(point: Point): Observable<any> {
    return this.http.put(this.pointsUrl, point, this.httpOptions).pipe(
      tap(_ => this.log(`updated point id=${point.id}`)),
      catchError(this.handleError<any>('updatePoint'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PointService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PointService: ${message}`);
  }
}
