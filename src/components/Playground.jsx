import React, { useEffect } from 'react';
import { httpClient } from '../http/http-client';

const Playground = (props) => {
  useEffect(() => {
    httpClient
      .get('posts')
      .then((response) => console.log('Server response', response.data))
      .catch((error) => console.log('Error occurred', error.message))
      .finally(() => console.log('Server communication is completed'));
  }, []);

  return (
    <>
      <h3>Axios Playground</h3>
    </>
  );
};

export default Playground;
