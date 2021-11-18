import React from 'react';
import ApiAggregation from './components/ApiAggregation';
import Playground from './components/Playground';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <div className='container p-5'>
        <h3>Axios Demo</h3>
        <hr />
        {/* <Playground /> */}
        {/* <TodoList /> */}
        <ApiAggregation />
      </div>
    </>
  );
};

export default App;
