import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const reqresClient = axios.create({
  baseURL: 'https://reqres.in/api/',
});
