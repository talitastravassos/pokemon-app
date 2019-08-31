import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isSearch: boolean
  pokemon: any 

  constructor(private pokemonServive: PokemonService) { }

  submit(search: FormGroup){
    this.pokemonServive.searchPokemon(search.value.searchPokemon)
      .subscribe( (res: any) => {
        console.log(res)
        this.pokemon = res
        this.isSearch = true
      })
  }

  getImage(id){
    let url = "https://www.serebii.net/art/th/"
    return url + id + ".png"
  }


  ngOnInit() {
  }

}
