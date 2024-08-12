import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public edad: number = 35;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  };

  get heroDescripcion(): string{
    return `${this.name} - ${this.edad}`;
  }

  changeHero():void{
    this.name = 'spiderman';
  }
  changeAge():void{
    this.edad = 25;
  }

  resetForm():void {
    this.name = 'ironman'
    this.edad = 35
  }
}
