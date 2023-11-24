import { Component, OnInit } from '@angular/core';

import { Point } from '../point';
import {PointService} from "../point.service";


@Component({
  selector: 'app-point',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  points: Point[] = [];

  constructor(private pointService: PointService) { }

  ngOnInit(): void {
    this.getPoints();
  }

  getPoints(): void {
    this.pointService.getPoints()
      .subscribe(points => this.points = points);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pointService.addPoint({ name } as Point)
      .subscribe(point => {
        this.points.push(point);
      });
  }

  delete(point: Point): void {
    this.points = this.points.filter(p => p !== point);
    this.pointService.deletePoint(point.id).subscribe();
  }

}
