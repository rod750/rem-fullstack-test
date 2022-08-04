import { Model } from '@/database/models/model';

export class Pokemon extends Model {
  public id!: string;
  public apiId!: string;
  public name!: string;
  public imageUrl!: string;
  public teamId!: string;
}
