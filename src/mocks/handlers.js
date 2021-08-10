import { rest } from 'msw';
import { API_BASE_URL } from '../api';
import characterJson from './data/character.json';

export default [
  rest.get(`${API_BASE_URL}character`, (req, res, ctx) => {
    return res(ctx.json(characterJson));
  }),
];
