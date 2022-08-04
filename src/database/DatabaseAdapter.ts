import { Team } from '@/database/models/team';
import { Trainer } from '@/database/models/trainer';

export interface DatabaseAdapter {
  getTrainers(): Promise<Trainer[]>;
  getTrainer(trainerId: string): Promise<Trainer>;
  getTrainerByCredentials(name: string, password: string): Promise<Trainer>;
  createTrainer(trainer: Trainer): Promise<boolean>;
  updateTrainer(trainer: Trainer): Promise<boolean>;
  deleteTrainer(trainerId: string): Promise<boolean>;
  getTeams(trainerId: string): Promise<Team[]>;
  getTeam(teamId: string): Promise<Team>;
  createTeam(team: Team): Promise<boolean>;
  updateTeam(team: Team): Promise<boolean>;
  deleteTeam(teamId: string): Promise<boolean>;
  connect(url: string): Promise<void>;
}
