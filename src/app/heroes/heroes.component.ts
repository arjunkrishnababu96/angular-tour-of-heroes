import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
<<<<<<< HEAD
import { HEROES } from '../mock-heroes';
=======
import { HeroService } from '../hero.service';
>>>>>>> 3905fced42be981a33ca2ab1434fe86f416b139a

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

<<<<<<< HEAD
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  selectedHero;

  heroes = HEROES;
  
  constructor() { }

  ngOnInit() {
  
=======
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
>>>>>>> 3905fced42be981a33ca2ab1434fe86f416b139a
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
