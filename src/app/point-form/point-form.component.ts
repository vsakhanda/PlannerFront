import { Component } from '@angular/core';

import { Point } from '../point';

@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.css']
})
export class PointFormComponent {

  powers = ['Карєр', 'Памятка архітектури',
    'Історичне місце', 'Ресторан'];

  model = new Point(
    18,
    'Dr. IQ', this.powers[0],
    3,
    3,
    'Point description',
    'our address is Kyiv  ',
    '343435353535',
    'http//index.thml',
    'main',
    'central',
    'Chuck Overstreet' );

  submitted = false;

  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new Point(
      42,
      '22',
      '22',
      3,
      5,
      '222',
      '333',
      '333',
      '333123',
      '333',
      '222',
      '2222');
  }

  skyDog(): Point {
    const myPoint =  new Point(
      42,
      'SkyDog',
      'Fetch any object at any distance',
      7,
      8,
      '3333',
      '3123123',
      '123123',
      '123123',
      '123',
      '12312',
      'Leslie Rollover');
    console.log('My hero is called ' + myPoint.name); // "My hero is called SkyDog"
    return myPoint;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////

}
