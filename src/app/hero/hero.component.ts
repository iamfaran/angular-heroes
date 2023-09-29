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
  // selected hero can be undefined or a hero object
  selectedHero?: Hero;
  constructor() {
    console.log(this);
  }

  onHeroClick(hero: Hero): void {
    // print hero object to console
    this.selectedHero = hero;
  }
}
