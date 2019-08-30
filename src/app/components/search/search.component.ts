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

  constructor(private pokemonServive: PokemonService) { }

  submit(search: FormGroup){
    this.pokemonServive.searchPokemon(search.value.searchPokemon)
      .subscribe( (res: any) => {
        console.log(res)
        this.isSearch = true
      })
  }

  ngOnInit() {
  }

}
