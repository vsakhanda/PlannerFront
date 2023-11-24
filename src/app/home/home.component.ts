
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Point } from '../point';



@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

    // implements OnInit{
 /*   points: Point[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getPoints();
        this.getRoutes();
        this.getTrips();
    }

    getPoints(): void {
        this.heroService.getHeroes()
            .subscribe(points => this.points = points.slice(1, 5));
    }

    getRoutes(): void {
        this.heroService.getHeroes()
            .subscribe(points => this.points = points.slice(1, 5));
    }

    getTrips(): void {
        this.heroService.getHeroes()
            .subscribe(points => this.points = points.slice(1, 5));
    }*/
}
