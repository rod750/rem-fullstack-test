import { MongoAdapter } from '@/database/adapters';
import { DatabaseClient } from '@/database/database-client';

export * from './database-client';

const db = new DatabaseClient(
  new MongoAdapter({
    url: process.env.DATABASE_CONNECTION_STRING as string,
    databaseName: process.env.DATABASE_NAME as string
  })
);

export { db };
