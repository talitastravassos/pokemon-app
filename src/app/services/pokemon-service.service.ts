import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from './notifications.service';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = "https://pokeapi.co/api/v2/pokemon/" //url API
  public caughtPokemon = [] // array with caught pokemons

  constructor(
    private http: HttpClient,
    private notificationService: NotificationsService) { }

  /* HTTP Requests */

  //get pokemon list of home page
  getPokemonList() {
    return this.http.get(this.url)
  }

  //search a pokemon by name
  searchPokemon(name) {
    return this.http.get(this.url + name)
  }

  //get a pokemon by url
  getPokemon(url) {
    return this.http.get(url)
  }

  //get next page of pokemons from API
  getNextPage() {
    return this.http.get(this.getNextPageStorage().toString())
  }

  /* localStorage stuffs */

  //save a pokemon in caught list from localStorage
  setPokemonStorage(pokemon) {
    if ((JSON.parse(localStorage.getItem("caughtPokemon")) !== null)) {
      this.caughtPokemon = JSON.parse(localStorage.getItem("caughtPokemon"))
    }

    this.caughtPokemon.push(pokemon)

    localStorage.setItem("caughtPokemon", JSON.stringify(this.caughtPokemon))
    this.notificationService.successNotification("You got this Pokemon!", "Cool!")
  }

  //get caught list from localStorage
  getPokemonStorage() {
    return JSON.parse(localStorage.getItem("caughtPokemon"))
  }

  //check if pokemon is a url to get an object or an object already
  setCatchPokemon(pokemon) {
    if ((typeof pokemon) !== "string") {
      this.setPokemonStorage(pokemon)
    } else {
      this.getPokemon(pokemon)
        .subscribe((res: any) => {
          this.setPokemonStorage(res)
        })
    }
  }

  //save next page url in localStorage
  setNextPageStorage(url) {
    localStorage.setItem("nextPage", url)
  }

  //get next page url from localStorage 
  getNextPageStorage() {
    return localStorage.getItem("nextPage")
  }

}
