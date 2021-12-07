import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Pokemon from '../shared/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class SearchPageService {

  readonly baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  async getPokemonByName(name: string): Promise<Pokemon>{
    return this.http.get<Pokemon>(`${this.baseUrl}${name}`).toPromise();
  }
}
