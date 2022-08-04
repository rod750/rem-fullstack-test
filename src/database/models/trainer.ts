import { Model } from '@/database/models/model';

export class Trainer extends Model {
  public id?: string;
  public name!: string;
  public password!: string;
  public imageUrl!: string;
}
