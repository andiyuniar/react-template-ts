import { IDBPDatabase, openDB } from 'idb';
import { TodoEntity } from './../entities/todoEntity';
import { ITodoRepository } from './../entities/todoRepository';

export class TodoRepositoryService implements ITodoRepository {

  private databaseName = 'TODOLIST';
  private databaseVersion: number;
  private storeName = 'todo';
  private db: any;

  public constructor(version?: number) {
    (version) ? this.databaseVersion = version : this.databaseVersion = 1;
    
    this.createObjectStore();
  }

  public async createObjectStore() {
    try {
      this.db = await openDB<TodoEntity>(this.databaseName, this.databaseVersion, {
        upgrade(db: IDBPDatabase<TodoEntity>) {
          db.createObjectStore('todo', { keyPath: 'id'})
        }
      })
    }
    catch (err) {
      return false;
    }
  }

  public async insert(data: TodoEntity): Promise<any> {
    return (await this.db).add(this.storeName, data);
  }

  public async insertMany(data: TodoEntity[]): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async getAll(): Promise<TodoEntity[]> {
    return (await this.db).getAll(this.storeName);
  }

  public async delete(id: string): Promise<void> {
    return (await this.db).delete(this.storeName, id);
  }

}