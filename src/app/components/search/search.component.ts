import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon-service.service';
import { FormGroup } from '@angular/forms';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  isSearch: boolean
  pokemon: any

  constructor(
    private pokemonServive: PokemonService,
    private notificationService: NotificationsService) { }

  submit(search: FormGroup) {
    this.pokemonServive.searchPokemon(search.value.searchPokemon)
      .subscribe(
        (res: any) => {
          console.log(res)
          this.pokemon = res
          this.isSearch = true
        },
        (error: Response) => {
          if (error.status === 404) {
            this.notificationService.errorNotification("Pokemon not found :/", "Sorry")
          } else {
            this.notificationService.errorNotification("Something's wrong :/", "Sorry")
          }
        })
  }

  getImage(id) {
    let url = "https://www.serebii.net/art/th/"
    return url + id + ".png"
  }

  catchPokemon(pokemon) {
    this.pokemonServive.setCatchPokemon(pokemon)
  }

}
