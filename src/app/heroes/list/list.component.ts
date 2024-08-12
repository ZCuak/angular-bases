import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public herosName: string[] = ['Spiderman','Hulk','She Hulk','Thor']
  public deleteHero?: string;

  deleteLastHero(): void {
    this.deleteHero = this.herosName.pop();
  }
}
