import { Item } from '@/database/models/item';
import { Model } from '@/database/models/model';

export class Pokemon extends Model {
  public id!: string;
  public apiId!: number;
  public name!: string;
  public imageUrl!: string;
  public teamId!: string;
  public item?: Item;

  constructor(obj: { [key: string]: unknown }) {
    super(obj);

    if (obj.item) {
      this.item = new Item(obj.item as { [key: string]: unknown });
    }
  }
}
