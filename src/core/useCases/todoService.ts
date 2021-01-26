import { TodoEntity } from './../entities/todoEntity';
import { ITodoRepository } from './../entities/todoRepository';

export interface ITodoService {
  insert(data: TodoEntity) : Promise<any>;

  insertMany(data: TodoEntity[] ) : Promise<void>;

  getAll(): Promise<TodoEntity[]>;

  delete(id:string) : Promise<void>;
}

export class TodoService implements ITodoService {
  public todoRepo: ITodoRepository;

  constructor(repo: ITodoRepository) {
    this.todoRepo = repo;
  }

  public async insert(data: TodoEntity): Promise<any> {
    return this.todoRepo.insert(data);
  }

  public async insertMany(data: TodoEntity[]): Promise<void> {
    return this.todoRepo.insertMany(data);
  }

  public async getAll(): Promise<TodoEntity[]> {
    return this.todoRepo.getAll();
  }

  public async delete(id: string): Promise<void> {
    return this.todoRepo.delete(id);
  }
}