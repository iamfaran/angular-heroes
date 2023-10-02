import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {
    console.log('HEROE COMPONENT');
    console.log(this);
  }
  onHeroClick(hero: Hero): void {
    this.selectedHero = hero;
    console.log('Parent component HAHAH', this.selectedHero);
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
