import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Point } from '../point';
import {PointService} from "../point.service";


@Component({
  selector: 'app-point-search',
  templateUrl: './point-search.component.html',
  styleUrls: [ './point-search.component.css' ]
})
export class PointSearchComponent implements OnInit {
  points$!: Observable<Point[]>;
  private searchTerms = new Subject<string>();

  constructor(private pointService: PointService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.points$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.pointService.searchPoints(term)),
    );
  }
}
