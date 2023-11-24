import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Point } from '../point';
import {PointService} from "../point.service";


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  point: Point | undefined;

  constructor(
    private route: ActivatedRoute,
    private pointService: PointService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.pointService.getPoint(id)
      .subscribe(point => this.point = point);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.point) {
      this.pointService.updatePoint(this.point)
        .subscribe(() => this.goBack());
    }
  }
}
