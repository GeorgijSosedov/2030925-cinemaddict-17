import {createElement} from '../render.js';

const createShowMoreButtonTemplate = () => '<button class="show-more" type="button">show more</button>';

export default class ShowMoreButtonView {
  getTemplate() {
    return createShowMoreButtonTemplate();
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