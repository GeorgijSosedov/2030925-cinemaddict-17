import {createElement} from '../render.js';

const createNewTaskBundleTemplate = () => '<button class="control__button">+ ADD NEW TASK</button>';

export default class NewTaskBundleView {
  #element = null

  get template() {
    return createNewTaskBundleTemplate();
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
