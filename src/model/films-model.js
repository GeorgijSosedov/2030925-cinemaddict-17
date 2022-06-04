import { ESLint } from 'eslint';
import {generateFilm} from '../fish/task.js';

export default class FilmsModel {
  films = Array.from({length: 24}, generateFilm);

  getFilms = () => this.films;
}


