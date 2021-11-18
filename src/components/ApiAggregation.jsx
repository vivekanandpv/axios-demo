import React, { useEffect, useState } from 'react';
import { reqresClient } from '../http/http-client';

const ApiAggregation = (props) => {
  const [pageViewModel, setPageViewModel] = useState({});
  const [appUsers, setAppUsers] = useState([]);

  useEffect(() => {
    reqresClient
      .get('users?page=2')
      .then((response) => {
        setPageViewModel({
          totalPages: response.data.total_pages,
          currentPage: response.data.page,
          recordsPerPage: response.data.per_page,
        });
        return response.data;
      })
      .then((page) => {
        const allUsers = page.data;
        allUsers.forEach((u) => {
          reqresClient.get(`users/${u.id}`).then((res) => {
            console.log(res.data.data);
            const currentUser = {
              userMetadata: u.first_name,
              userDetails: res.data.data,
            };
            setAppUsers((oldState) => {
              return [...oldState, currentUser];
            });
          });
        });
      });
  }, []);

  return (
    <>
      <h3>Api Aggregation</h3>

      <hr />
      <pre>{JSON.stringify(pageViewModel, null, 2)}</pre>
      <pre>{JSON.stringify(appUsers, null, 2)}</pre>
    </>
  );
};

export default ApiAggregation;
