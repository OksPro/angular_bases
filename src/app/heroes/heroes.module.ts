import { NgModule } from '@angular/core';

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from '@angular/common';
import { DbzModule } from '../dbz/dbz.module';
import { MainPageComponent } from '../dbz/pages/main-page.component';


@NgModule({
  declarations: [
    HeroComponent, //? Lo encapsulamos en este moudulo
    ListComponent
  ],
  exports:[ //? para que sean visibles en le app.component
    HeroComponent,
    ListComponent,
    MainPageComponent
  ],
  imports:[
    CommonModule,
    DbzModule
  ]
})

export class HeroesModule {}
