import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from 'src/app/services/characters-api.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent {

  constructor(private characterSvc: CharactersApiService) { }
  allCharacters: Observable<any>;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.characterSvc.getAllCharacters();
  }
}
