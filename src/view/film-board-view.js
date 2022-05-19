import {createElement} from '../render.js';

const createFilmTemplate = () => '<section class="board container"></section>';

export default class FilmView {
  getTemplate() {
    return createFilmTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
