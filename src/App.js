import React from 'react';
import Playground from './components/Playground';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <div className='container p-5'>
        <h3>Axios Demo</h3>
        <hr />
        {/* <Playground /> */}
        <TodoList />
      </div>
    </>
  );
};

export default App;
