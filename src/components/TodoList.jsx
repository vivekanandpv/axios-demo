import React, { useState, useEffect } from 'react';
import { httpClient } from '../http/http-client';

const TodoList = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    httpClient
      .get('todos')
      .then((response) => setTodos(response.data))
      .catch((error) => console.log('Error occurred', error.message))
      .finally(() => console.log('Server communication is completed'));
  }, []);

  const table = (
    <table className='table table-striped table-sm table-bordered'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((t) => (
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.title}</td>
            <td>
              {t.completed ? (
                <span className='badge rounded-pill bg-success'>Completed</span>
              ) : (
                <span className='badge rounded-pill bg-warning'>Pending</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <h3>Todo List</h3>
      {todos.length > 0 ? table : <p>No data to display!</p>}
    </>
  );
};

export default TodoList;
