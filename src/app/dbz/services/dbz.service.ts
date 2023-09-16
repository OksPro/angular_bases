import {Injectable} from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuid} from 'uuid'
//? Injectable nos provee una instancia singlton para toda la aplicación
@Injectable ({
  providedIn: 'root'
})
export class DbzService {
  constructor(){}
  public characters: Character[] = [
    {id:uuid(), name: 'Krilin', power: 1000},
    {id:uuid(), name: 'Goku',   power: 9500},
    {id:uuid(), name: 'Vegeta', power: 7500}];

    newCharacter(character: Character):void{
      const newCharacter: Character = {
        id: uuid(), ...character} // = id y lo que tenga en character.
      this.characters.unshift(newCharacter);
    }

    deleteCharacterById(id: string):void{
      // mi lista es = a lista.filter devuelve a todos menos el que tiene el id que le paso.
      this.characters = this.characters.filter(character => character.id !== id);
    }

}
