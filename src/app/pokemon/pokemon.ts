import { PokemonType } from "./models/type-enums";

export interface Pokemon {
    id: number,
    name: string,
    typeMain: PokemonType,
    typeSecondary?: PokemonType,
    description: string,
}