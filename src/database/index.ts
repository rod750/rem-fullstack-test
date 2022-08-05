import { MongoAdapter } from '@/database/adapters';
import { DatabaseClient } from '@/database/database-client';

export * from './database-client';

const db = new DatabaseClient(
  new MongoAdapter({
    url: process.env.DATABASE_CONNECTION_STRING as string,
    databaseName: 'pokemon-test',
  })
);

export { db };
