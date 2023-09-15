import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0
  }

  //? Elemento que lanza el objeto a aquellos que lo estan esuchando.
  @Output()
  public onNewCaracter: EventEmitter<Character> = new EventEmitter();

  emitCharacter():void{
    console.log(this.character);
    if (this.character.name.length === 0) return; //Si el nombre no esta no lo emito
    this.onNewCaracter.emit(this.character);
    this.character = {name: '',power: 0};
  }

}
