import axios from 'axios';

export const API_BASE_URL = 'https://rickandmortyapi.com/api/';

const instance = axios.create({
  baseURL: API_BASE_URL,
});

function testFunction() {
  let a = 1;
  if (true) {
    a = 2;
  } else {
    a = 3;
  }
}

testFunction();

export default instance;
