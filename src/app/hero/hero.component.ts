import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  // receive hero object from parent component
  // store it in a local hero property
  @Input() hero!: Hero;
  constructor() {}

  onHeroClick() {
    // print hero object to console
    console.log(this.hero);
  }
}
