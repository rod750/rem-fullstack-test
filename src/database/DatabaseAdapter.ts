import { Team } from '@/database/models/team';
import { Trainer } from '@/database/models/trainer';

export interface DatabaseAdapter {
  getTrainers(): Trainer[];
  getTrainer(trainerId: string): Trainer;
  getTeams(trainerId: string): Team[];
  getTeam(teamId: string): Team;
}
