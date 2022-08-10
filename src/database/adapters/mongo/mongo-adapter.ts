import { Db, MongoClient, ObjectId, OptionalId } from 'mongodb';

import { DatabaseAdapter } from '@/database/database-adapter';
import { Trainer } from '@/database/models/trainer';
import { Item, Pokemon, Team } from '@/database/models';

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
      return trainers.map((t) => {
        const result = new Trainer(t) as Trainer & OptionalId<Document>;

        result.id = t._id.toString();
        delete result._id;

        return result;
      });
    }

    return [];
  }

  async getTrainer(trainerId: string): Promise<Trainer | undefined> {
    const trainer = await this.db
      .collection('trainers')
      .findOne({ _id: new ObjectId(trainerId) });

    if (trainer) {
      const result = new Trainer(trainer) as Trainer & OptionalId<Document>;

      result.id = trainer._id.toString();
      delete result._id;

      return result;
    }

    return undefined;
  }

  async getTrainerByCredentials(
    name: string,
    password: string
  ): Promise<Trainer | undefined> {
    const trainer = await this.db
      .collection('trainers')
      .findOne({ name, password });

    if (trainer) {
      const result = new Trainer(trainer) as Trainer & OptionalId<Document>;

      result.id = trainer._id.toString();
      delete result._id;

      return result;
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
      .updateOne({ _id: new ObjectId(id) }, { $set: trainer });

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
