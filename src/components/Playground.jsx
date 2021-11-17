import React, { useEffect } from 'react';
import { httpClient } from '../http/http-client';

const Playground = (props) => {
  useEffect(() => {
    console.log('Playground first render');
  }, []);

  return (
    <>
      <h3>Axios Playground</h3>
    </>
  );
};

export default Playground;
