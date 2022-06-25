import {createElement} from '../render.js';

const createNewTaskBundleTemplate = () => '<button class="control__button">+ ADD NEW TASK</button>';

export default class NewTaskBundleView {
  getTemplate() {
    return createNewTaskBundleTemplate();
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
