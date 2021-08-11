import { rest } from 'msw';
import { API_BASE_URL } from '../api';
import characterJson from './data/character.json';

const getServerApi = (path) => {
  return new URL(path, API_BASE_URL).toString();
};

export default [
  rest.get(getServerApi('character'), (req, res, ctx) => {
    return res(ctx.json(characterJson));
  }),
];
