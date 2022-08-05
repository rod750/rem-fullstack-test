import { Trainer } from "@/database/models";

export interface ApiAdapter {
  getTrainers(): Promise<Trainer[]>;
  getTrainer(trainerId: string): Promise<Trainer | undefined>;
  createTrainer(trainer: Trainer): Promise<boolean>;
  updateTrainer(trainer: Trainer): Promise<boolean>;
}