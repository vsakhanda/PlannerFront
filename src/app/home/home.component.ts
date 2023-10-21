
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Point } from '../point';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-home',
  template: `

    <H1>ДОМАШНЯ СТОРІНКА</H1>
  `,
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
            .subscribe(heroes => this.points = heroes.slice(1, 5));
    }

    getRoutes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.points = heroes.slice(1, 5));
    }

    getTrips(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.points = heroes.slice(1, 5));
    }*/
}
