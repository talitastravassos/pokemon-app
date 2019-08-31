import { PokemonService } from './../../services/pokemon-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: any[]

  constructor(private pokemonServive: PokemonService) {

    this.pokemonServive.getPokemonList()
      .subscribe( (res: any ) => {
        this.pokemonList = res
        console.log(this.pokemonList)
      })

    }

    getImage(id){
      let url = "https://www.serebii.net/art/th/"

      return url + id + ".png"
    }

  ngOnInit() {
  }

}
