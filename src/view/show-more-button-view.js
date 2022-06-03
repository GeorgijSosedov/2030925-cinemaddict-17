import {createElement} from '../render.js';

const createShowMoreButtonTemplate = () => '<button class="show-more" type="button">show more</button>';

export default class ShowMoreButtonView {
  #element = null

  get template() {
    return createShowMoreButtonTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
