import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PointService } from './point.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import {PointFormComponent} from './point-form/point-form.component';
import {PointSearchComponent} from "./point-search/point-search.component";
import {HomeComponent} from "./home/home.component";
import {PointsComponent} from "./points/points.component";
import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    //
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PointsComponent,
    HeroDetailComponent,
    MessagesComponent,
    PointSearchComponent,
    PointFormComponent,
    HomeComponent,
    AboutComponent
  ],
  providers: [PointService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
