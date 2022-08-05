import axios from "axios";

import { ApiAdapter } from "@/api/api-adapter";

import { Item, Pokemon, Trainer } from "@/database/models";

export class AxiosAdapter implements ApiAdapter {
  constructor(private apiUrl: string, private pokeApiUrl: string) { }
  async getPokemon(): Promise<Pokemon[]> {
    try {
      const response = await axios.get(`${this.pokeApiUrl}/pokemon?limit=10000`);

      return response.data.results.map((p: { name: string, url: string }) => {
        const id = p.url.split("/").at(-2);
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return new Pokemon({
          apiId: parseInt(id || "0"),
          imageUrl,
          name: p.name
        });
      });
    }
    catch (ex) {
      console.error(ex);
    }

    return [];
  }

  async getItems(): Promise<Item[]> {
    try {
      const response = await axios.get(`${this.pokeApiUrl}/item?limit=10000`);

      return response.data.results.map((p: { name: string, url: string }) => {
        const id = p.url.split("/").at(-2);

        return new Item({
          apiId: parseInt(id || "0"),
          name: p.name
        });
      });
    }
    catch (ex) {
      console.error(ex);
    }

    return [];
  }

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