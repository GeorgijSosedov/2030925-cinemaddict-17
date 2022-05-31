
import {createElement} from '../render.js';
import {humanizeFilmDate, isFilmExpired, isFilmRepeating} from '../utils.js';

const createFilmTemplate = (task) => {
  const {color, description, dueDate, repeating, isArchive, isFavorite} = task;
};
const film = dueDate !== null
  ? humanizeFilmDate(dueDate)
  : '';

  const deadlineClassName = isFilmExpired(dueDate)
    ? 'card--deadline'
    : '';

    const repeatClassName = isFilmRepeating(repeating)
    ? 'card--repeat'
    : '';

  const archiveClassName = isArchive
    ? 'card__btn--archive card__btn--disabled'
    : 'card__btn--archive';

  const favoriteClassName = isFavorite
    ? 'card__btn--favorites card__btn--disabled'
    : 'card__btn--favorites';

    export default class FilmView {
      #element = null;
  
      get template() {
      return createFilmTemplate;
      }
  
      get element() {
        if (!this.#element) {
          this.#element = createElement(this.template);
        }
      };
      
      removeElement() {
        this.#element = null;
      }
    };

    return (
      `<article class="card card--${color} ${deadlineClassName} ${repeatClassName}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn ${archiveClassName}">
              archive
            </button>
            <button
              type="button"
              class="card__btn ${favoriteClassName}"
            >
              favorites
            </button>
          </div>
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
          <div class="card__textarea-wrap">
            <p class="card__text">${description}</p>
          </div>
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${date}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
    )
    
