import {generateFilm} from '../fish/films.js';

export default class FilmsModel {
  #films = Array.from({length: 15}, generateFilm);

  get films () {
    return this.#films;
  }
}
