import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = '1901c232bd41bde1bd5d922de243b9ff';
  HASH = '5bd2cdb129c6612bdebb8786831ae351';
  HASH_2 = '1f7eac32068f798ad3aa16d73a58325a34fadbf961901c232bd41bde1bd5d922de243b9ff';
  URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
  }
}
