import { Trainer } from '@/database/models/trainer';

export interface DatabaseAdapter {
  getTrainers(): Promise<Trainer[]>;
  getTrainer(trainerId: string): Promise<Trainer | undefined>;
  getTrainerByCredentials(
    name: string,
    password: string
  ): Promise<Trainer | undefined>;
  createTrainer(trainer: Trainer): Promise<boolean>;
  updateTrainer(trainer: Trainer): Promise<boolean>;
  deleteTrainer(trainerId: string): Promise<boolean>;
  connect(): Promise<void>;
}
