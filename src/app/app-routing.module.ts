import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HomeComponent} from "./home/home.component";
import {PointFormComponent} from "./point-form/point-form.component";
import {PointSearchComponent} from "./point-search/point-search.component";
import {PointsComponent} from "./points/points.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'points', component: PointsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'point', component: PointFormComponent },
  { path: 'new hero', component: PointSearchComponent },
  { path: 'about', component: AboutComponent },


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

