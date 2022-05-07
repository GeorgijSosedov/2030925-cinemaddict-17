import {createElement} from '../render.js';
import {humanizeFilmDate, isFilmRepeating} from '../utils.js';
import { COLORS } from '../fish/const.js';

const createFilmEditRepeatingTemplate = (repeating) => (
  `<button class="card__repeat-toggle" type="button">
    repeat:<span class="card__repeat-status">${isFilmRepeating(repeating) ? 'yes' : 'no'}</span>
  </button>

  ${isFilmRepeating(repeating) ? `<fieldset class="card__repeat-days">
    <div class="card__repeat-days-inner">
      ${Object.entries(repeating).map(([day, repeat]) => `<input
        class="visually-hidden card__repeat-day-input"
        type="checkbox"
        id="repeat-${day}"
        name="repeat"
        value="${day}"
        ${repeat ? 'checked' : ''}
      />
      <label class="card__repeat-day" for="repeat-${day}"
        >${day}</label
      >`).join('')}
    </div>
  </fieldset>` : ''}`
);

const createFilmEditDateTemplate = (dueDate) => (
  `<button class="card__date-deadline-toggle" type="button">
      date: <span class="card__date-status">${dueDate !== null ? 'yes' : 'no'}</span>
    </button>
    ${dueDate !== null ? `<fieldset class="card__date-deadline">
      <label class="card__input-deadline-wrap">
        <input
          class="card__date"
          type="text"
          placeholder=""
          name="date"
          value="${humanizeFilmDate(dueDate)}"
        />
      </label>
    </fieldset>` : ''}
  `
);

const createTaskEditColorsTemplate = (currentColor) => COLORS.map((color) => `<input
    type="radio"
    id="color-${color}"
    class="card__color-input card__color-input--${color} visually-hidden"
    name="color"
    value="${color}"
    ${currentColor === color ? 'checked' : ''}
  />
  <label
    for="color-${color}"
    class="card__color card__color--${color}"
    >${color}</label
  >`).join('');

const createFilmEditTemplate = (film = {}) => {
  const {
    color = 'black'
    ? 'card--repeat'
    : '';

const colorsTemplate = createFilmEditColorsTemplate(color);

const dateTemplate = createFilmEditDateTemplate(dueDate);

  const repeatingClassName = isFilmRepeating(repeating)
    ? 'card--repeat'
    : '';

    const repeatingTemplate = createFilmEditRepeatingTemplate(repeating);

  return (
    `<article class="card card--edit card--${color} ${repeatingClassName}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >${description}</textarea>
            </label>
          </div>
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
              ${dateTemplate}
              ${repeatingTemplate}
              </div>
            </div>
            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
              ${colorsTemplate}
              </div>
            </div>
          </div>
          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`
  );

export default class FilmEditView {
  constructor(generateFilm) {
    this.generateFilm = film;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return createFilmEditTemplate(this.generateFilm);
  }

  removeElement() {
    this.element = null;
  }
}