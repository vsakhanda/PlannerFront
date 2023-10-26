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

  model = new Point(18,
    'Dr. IQ', this.powers[0],
    'Chuck Overstreet',
    '303030303',
    '',
    '',
    '',
    '',
    '',
    '',
    '' );

  submitted = false;

  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new Point(
      42,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '');
  }

  skyDog(): Point {
    const myPoint =  new Point(42, 'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',);
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
