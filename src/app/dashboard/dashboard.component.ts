import { Component, OnInit } from '@angular/core';
import { Point } from '../point';
import {PointService} from "../point.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  points: Point[] = [];

  constructor(private pointService: PointService) { }

  ngOnInit(): void {
    this.getPoints();
  }

  getPoints(): void {
    this.pointService.getPoints()
      .subscribe(points => this.points = points.slice(1, 5));
  }
}
