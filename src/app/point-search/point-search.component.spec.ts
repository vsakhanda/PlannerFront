import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSearchComponent } from './point-search.component';

describe('HeroSearchComponent', () => {
  let component: PointSearchComponent;
  let fixture: ComponentFixture<PointSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointSearchComponent]
    });
    fixture = TestBed.createComponent(PointSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
