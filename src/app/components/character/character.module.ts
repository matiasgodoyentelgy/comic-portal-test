import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[
    CharacterCardComponent,
    CharacterListComponent
  ]
})
export class CharacterModule { }
