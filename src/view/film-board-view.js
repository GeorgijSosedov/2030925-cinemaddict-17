import {createElement} from '../render.js';

const createFilmTemplate = () => '<section class="board container"></section>';

export default class FilmView {
  #element = null

  get template() {
    return createFilmTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template)

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
  }
}
