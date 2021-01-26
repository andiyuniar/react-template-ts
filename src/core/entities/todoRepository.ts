import { TodoEntity } from './todoEntity';

export interface ITodoRepository {
  insert(data: TodoEntity) : Promise<any>;

  insertMany(data: TodoEntity[] ) : Promise<void>;

  getAll(): Promise<TodoEntity[]>;

  delete(id:string) : Promise<void>;
}