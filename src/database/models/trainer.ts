import { Model, Team } from '@/database/models';

export class Trainer extends Model {
  public id?: string;
  public name!: string;
  public password!: string;
  public imageUrl!: string;
  public teams: Team[] = [];
}
