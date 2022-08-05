import { Model } from '@/database/models/model';
import { Pokemon } from '@/database/models/pokemon';

export class Team extends Model {
  public id?: string;
  public name!: string;
  public trainerId!: string;
  public pokemon!: Pokemon[];

  constructor(obj: { [key: string]: unknown }) {
    super(obj);

    if (obj.pokemon) {
      const pokemon = obj.pokemon as { [key: string]: unknown }[];

      this.pokemon = pokemon.map(p => new Pokemon(p));
    }

    return this;
  }
}
