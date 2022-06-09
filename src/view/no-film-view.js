import { create } from "domain";
import { createElement } from "../render";

const createNoFilmTemplate = () => (
`<p class="film__no-tasks">
Click «ADD NEW TASK» in menu to create your first task
</p>`
);
export default class NoFilmView {
 #element = null;

 get element() {
     if (this.#element) {
         this.#element = createElement(this.template)
     }
     return this.#element
 };

get template() {
    return createNoFilmTemplate();
};

removeElement() {
    this.#element = null;
};
};