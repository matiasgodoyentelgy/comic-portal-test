import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from 'src/app/services/characters-api.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  constructor(private characterSvc: CharactersApiService) { }
  allCharacters: Observable<any>;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.characterSvc.getAllCharacters();
  }
}
