import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'caught-pokemons-list',
  templateUrl: './caught-pokemons-list.component.html',
  styleUrls: ['./caught-pokemons-list.component.css']
})
export class CaughtPokemonsListComponent implements OnInit {

  caughtPokemons: any[]

  constructor(private pokemonServive: PokemonService) {
    this.caughtPokemons = this.pokemonServive.getPokemonStorage()
    console.log(this.caughtPokemons)
   }

   getImage(id){
    let url = "https://www.serebii.net/art/th/"
    return url + id + ".png"
  }

  ngOnInit() {
  }

}
