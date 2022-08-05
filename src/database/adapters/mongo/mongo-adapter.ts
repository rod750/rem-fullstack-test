import { Db, MongoClient } from 'mongodb';

import { DatabaseAdapter } from '@/database/database-adapter';
import { Trainer } from '@/database/models/trainer';

export class MongoAdapter implements DatabaseAdapter {
  private url: string;
  private databaseName: string;
  private db!: Db;

  constructor({ url, databaseName }: { url: string; databaseName: string }) {
    this.url = url;
    this.databaseName = databaseName;
  }

  public getUrl(): string {
    return this.url;
  }

  public getDatabaseName(): string {
    return this.databaseName;
  }

  async getTrainers(): Promise<Trainer[]> {
    const trainers = await this.db.collection('trainers').find({}).toArray();

    if (trainers) {
      return trainers.map((t) => new Trainer(t));
    }

    return [];
  }

  async getTrainer(trainerId: string): Promise<Trainer | undefined> {
    const trainer = await this.db
      .collection('trainers')
      .find({ _id: trainerId })
      .toArray();

    if (trainer?.length) {
      return new Trainer(trainer[0]);
    }

    return undefined;
  }

  async getTrainerByCredentials(
    name: string,
    password: string
  ): Promise<Trainer | undefined> {
    const trainer = await this.db
      .collection('trainers')
      .find({ name, password })
      .toArray();

    if (trainer?.length) {
      return new Trainer(trainer[0]);
    }

    return undefined;
  }

  async createTrainer(trainer: Trainer): Promise<boolean> {
    delete trainer.id;

    const result = await this.db.collection('trainers').insertOne(trainer);

    return result ? true : false;
  }

  async updateTrainer(trainer: Trainer): Promise<boolean> {
    const id = trainer.id;

    delete trainer.id;

    const result = await this.db
      .collection('trainers')
      .updateOne({ _id: id }, { $set: trainer });

    return result ? true : false;
  }

  async deleteTrainer(trainerId: string): Promise<boolean> {
    const result = await this.db
      .collection('trainers')
      .deleteOne({ _id: trainerId });

    return result ? true : false;
  }

  async connect(): Promise<void> {
    const mongo = new MongoClient(this.url);
    await mongo.connect();
    this.db = mongo.db(this.databaseName);
  }
}
