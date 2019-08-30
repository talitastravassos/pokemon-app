import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = "https://pokeapi.co/api/v2/pokemon/"
  public isSearch: boolean = false;

  constructor(private http: HttpClient) { }

  getPokemonList(){
    return this.http.get(this.url)
  }

  searchPokemon(name){
    this.isSearch = true
    return this.http.get(this.url + name)
  }

  getPokemon(url) {
    return this.http.get(this.url)
  }

}
