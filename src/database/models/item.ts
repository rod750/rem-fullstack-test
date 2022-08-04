import { Model } from '@/database/models/model';

export class Item extends Model {
  public id!: string;
  public apiId!: number;
  public name!: string;
  public pokemonId!: string;
}
