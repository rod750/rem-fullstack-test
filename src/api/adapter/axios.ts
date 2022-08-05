import axios from "axios";

import { ApiAdapter } from "@/api/api-adapter";

import { Trainer } from "@/database/models";

export class AxiosAdapter implements ApiAdapter {
  constructor(private apiUrl: string, private pokeApiUrl: string) { }

  async getTrainers(): Promise<Trainer[]> {
    const response = await axios.get(`${this.apiUrl}/trainers`);

    return response?.data?.data?.map((t: { [key: string]: unknown }) => new Trainer(t)) || [];
  }

  async getTrainer(trainerId: string): Promise<Trainer | undefined> {
    const response = await axios.get(`${this.apiUrl}/trainers/${trainerId}`);

    if (!response.data?.data) {
      return undefined;
    }

    return new Trainer(response.data.data);
  }

  createTrainer(trainer: Trainer): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  updateTrainer(trainer: Trainer): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}