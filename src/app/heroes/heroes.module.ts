import { NgModule } from '@angular/core';

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeroComponent, //? Lo encapsulamos en este moudulo
    ListComponent
  ],
  exports:[ //? para que sean visibles en le app.component
    HeroComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule {}
