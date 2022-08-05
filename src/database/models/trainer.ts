import { Model, Team } from '@/database/models';

export class Trainer extends Model {
  public id?: string;
  public name!: string;
  public password!: string;
  public imageUrl!: string;
  public teams: Team[] = [];

  constructor(obj: { [key: string]: unknown }) {
    super(obj);

    if (obj.teams) {
      const teams = obj.teams as { [key: string]: unknown }[];

      this.teams = teams.map(t => new Team(t));
    }

    return this;
  }
}
