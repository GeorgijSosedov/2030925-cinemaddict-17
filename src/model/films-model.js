import {generateFilm} from '../fish/task.js';

export default class FilmsModel {
  #films = Array.from({length: 5}, generateFilm);

  getFilms () { this.films;
  return this.#films
  }
}
