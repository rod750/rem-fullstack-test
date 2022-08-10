import { Item, Pokemon, Trainer } from "@/database/models";

export interface ApiAdapter {
  getTrainers(): Promise<Trainer[]>;
  getTrainer(trainerId: string): Promise<Trainer>;
  createTrainer(trainer: Trainer): Promise<boolean>;
  updateTrainer(trainer: Trainer): Promise<boolean>;
  deleteTrainer(trainerId: string): Promise<boolean>;
  getPokemon(): Promise<Pokemon[]>;
  getItems(): Promise<Item[]>;
}