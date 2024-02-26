import { Injectable } from "@angular/core";
import { PokemonClient } from "pokenode-ts";
import { from } from "rxjs";

@Injectable()
export class PokemonService{
    
    constructor(private pokemonClient: PokemonClient){

    }

    getPokemonList(offset?: number, limit?: number){
        return from(this.pokemonClient.listPokemons(offset, limit));
    }
}