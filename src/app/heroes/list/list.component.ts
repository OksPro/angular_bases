import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    superHeroes: string[] = ['Wonder Woman', 'Wanda','Cat Woman', 'Harley Quen', 'Poison Ive']
    public dropedHero?: string;

    dropLastHero():void{
      this.dropedHero = this.superHeroes.pop();
    }

  }
