import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gateway-qa.solistica.com/',
  headers: {'Content-Type': 'application/json'},
});

