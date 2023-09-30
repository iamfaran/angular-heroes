import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() selectedHero = new EventEmitter<Hero>();

  constructor() {
    console.log(this);
  }

  onHeroClick(hero: Hero): void {
    // print hero object to console
    this.selectedHero.emit(hero);
  }
}
