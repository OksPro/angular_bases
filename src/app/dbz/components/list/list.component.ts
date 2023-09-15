import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() //? se puede poner nombre de la propidad si se quiere.
  public characterList: Character[] = []

  @Output()
  public itemToDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number):void{
    console.log('Id o incice mandadao.' + index)
    this.itemToDelete.emit(index)
  }
}
