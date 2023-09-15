import { Component } from "@angular/core";
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
public characters: Character[] = [
  {name: 'Krilin',power: 1000},
  {name: 'Goku',power: 9500},
  {name: 'Vegeta',power: 7500}];

  newCharacter(charcter: Character):void{
    this.characters.unshift(charcter);
  }

  onDeleteId(id: number):void{
    this.characters.splice(id,1);
    console.log('Recibido y borrado.')
  }

}
