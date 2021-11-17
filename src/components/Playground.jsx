import React, { useEffect, useState } from 'react';
import { httpClient } from '../http/http-client';

const Playground = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    httpClient
      .get('posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.log('Error occurred', error.message))
      .finally(() => console.log('Server communication is completed'));
  }, []);

  return (
    <>
      <h3>Axios Playground</h3>
      <table className='table table-striped table-sm table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Playground;
