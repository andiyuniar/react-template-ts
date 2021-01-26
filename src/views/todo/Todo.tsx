import React, { useState, useRef, useEffect } from 'react';
import { TodoEntity } from './../../core/entities/todoEntity';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from './../../core/useCases/todoService'

const Todo = () => {
  const [todos, setTodos] = useState<TodoEntity[]>([]);
  const formtxt = useRef<HTMLFormElement>(null);
  const timetxt = useRef<HTMLInputElement>(null);
  const activitytxt = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchData() {
      //TODO
    }

    fetchData();
  }, [])

  const addTodo = (e: React.MouseEvent) => {
    e.preventDefault();
    let id = uuidv4();
    let time = (timetxt.current) ? timetxt.current.value : '';
    let activity = (activitytxt.current) ? activitytxt.current.value : '';


    // dependency injection
    // https://nehalist.io/dependency-injection-in-typescript/
    const service = new TodoService();


  }

  const deleteTodo = (idx: string) => {

  }

  return (
    <div>
      <form ref={formtxt} className='content'>
        <input type='text' ref={timetxt} placeholder='Time' />
        <input type='text' ref={activitytxt} placeholder='Activity' />
        <button onClick={addTodo}>Save</button>
      </form>
      <hr/>
      <div className='content'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Time</th>
              <th>Activity</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            { todos.map((data, idx) => 
              <tr key={idx}>
                <td>{idx+1}</td>
                <td>{data.time}</td>
                <td>{data.activity}</td>
                <td><button onClick={() => deleteTodo(data.id)}>Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )

}