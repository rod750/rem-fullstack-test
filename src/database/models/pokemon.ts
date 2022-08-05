import { Item } from '@/database/models/item';
import { Model } from '@/database/models/model';

export class Pokemon extends Model {
  public id!: string;
  public apiId!: number;
  public name!: string;
  public imageUrl!: string;
  public teamId!: string;
  public item?: Item;
}
