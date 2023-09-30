import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() {
    console.log(this);
  }
  onHeroClick(hero: Hero): void {
    this.selectedHero = hero;
    console.log('Parent component HAHAH', this.selectedHero);
  }
}
