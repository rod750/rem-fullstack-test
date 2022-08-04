import { DatabaseAdapter } from '@/database/DatabaseAdapter';

export class DatabaseClient {
  constructor(public adapter: DatabaseAdapter) {}
}
