import AbstractView from '../framework/view/abstract-view.js';

const createNewTaskBundleTemplate = () => '<button class="control__button">+ ADD NEW TASK</button>';

export default class NewTaskBundleView extends AbstractView {
  getTemplate() {
    return createNewTaskBundleTemplate();
  }

setClickHandler = (callback) => {
  this._callback.click = callback;
    this.element.addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };
};
