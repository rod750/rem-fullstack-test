import { DatabaseAdapter } from '@/database/database-adapter';

export class DatabaseClient {
  constructor(public adapter: DatabaseAdapter) {}
}
