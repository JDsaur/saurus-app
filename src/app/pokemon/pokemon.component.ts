import { Component } from '@angular/core';
import { PokedexComponent } from './pokedex/pokedex.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [PokedexComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.sass'
})
export class PokemonComponent {

}
