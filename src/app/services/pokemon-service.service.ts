import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = "https://pokeapi.co/api/v2/pokemon/"
  public isSearch: boolean = false;
  public caughtPokemon = []

  constructor(private http: HttpClient) { }

  getPokemonList(){
    return this.http.get(this.url)
  }

  searchPokemon(name){
    this.isSearch = true
    return this.http.get(this.url + name)
  }

  getPokemon(url) {
    return this.http.get(url)
  }

  setPokemonStorage(pokemon){
    if ((JSON.parse(localStorage.getItem("caughtPokemon")) !== null)){
      this.caughtPokemon = JSON.parse(localStorage.getItem("caughtPokemon"))
    }
    
    this.caughtPokemon.push(pokemon)

    localStorage.setItem("caughtPokemon", JSON.stringify(this.caughtPokemon))
  }

  getPokemonStorage(){
    return JSON.parse(localStorage.getItem("caughtPokemon"))
  }

  setCatchPokemon(pokemon){
    if ((typeof pokemon) !== "string"){
      this.setPokemonStorage(pokemon)
    } else {
      this.getPokemon(pokemon)
        .subscribe((res: any) => {
          this.setPokemonStorage(res)
        })
    }
  }

}
