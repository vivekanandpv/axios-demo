import React, { useReducer } from 'react';

const appReducer = (currentState, action) => {
  const newState = { ...currentState };
  ++newState.counter;
  newState.nCharacters = action.payload.nc;

  return newState;
};

const Sample = (props) => {
  const initState = {
    counter: 0,
    nCharacters: 0,
  };

  const [cState, dispatch] = useReducer(appReducer, initState);

  const handleInput = (e) => {
    const action = {
      type: 'incrementCounter',
      payload: {
        nc: e.target.value.length,
      },
    };
    dispatch(action);
  };

  return (
    <>
      <h3>Sample Component</h3>
      <p>
        No of keystrokes: {cState.counter}; Length of the input:{' '}
        {cState.nCharacters}
      </p>
      <input type='text' className='form-control' onInput={handleInput} />
    </>
  );
};

export default Sample;
