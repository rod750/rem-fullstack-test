import { Model } from '@/database/models/model';
import { Pokemon } from '@/database/models/pokemon';

export class Team extends Model {
  public id?: string;
  public name!: string;
  public trainerId!: string;
  public pokemon!: Pokemon[];
}
