import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from './notifications.service';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = "https://pokeapi.co/api/v2/pokemon/"
  public isSearch: boolean = false;
  public caughtPokemon = []

  constructor(
    private http: HttpClient, 
    private notificationService: NotificationsService) { }

  /* HTTP Requests */
  
  getPokemonList(){
    return this.http.get(this.url)
  }

  searchPokemon(name){
    return this.http.get(this.url + name)
  }

  getPokemon(url) {
    return this.http.get(url)
  }

  getNextPage(){
    return this.http.get(this.getNextPageStorage().toString())
  }

  /* localStorage stuffs */

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
      this.notificationService.successNotification("You got this Pokemon!", "Cool!")
    } else {
      this.getPokemon(pokemon)
        .subscribe((res: any) => {
          this.setPokemonStorage(res)
          this.notificationService.successNotification("You got this Pokemon!", "Cool!")
        })
    }
  }

  setNextPageStorage(url){
    localStorage.setItem("nextPage", url)
  }

  getNextPageStorage(){
    return localStorage.getItem("nextPage")
  }

}
