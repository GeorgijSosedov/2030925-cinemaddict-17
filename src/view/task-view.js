import {createElement} from '../render.js';
import {humanizeTaskDueDate, isTaskExpired, isTaskRepeating} from '../utils.js';

const createTaskTemplate = (task) => {
  const {color, description, dueDate, repeating, isArchive, isFavorite} = task;

  const date = dueDate !== null
    ? humanizeTaskDueDate(dueDate)
    ? 'card--deadline'
    : ''

  const repeatClassName = isTaskRepeating(repeating)
    ? 'card--repeat'
    : '';

  const archiveClassName = isArchive
    ? 'card__btn--archive card__btn--disabled'
    : 'card__btn--archive';

  const favoriteClassName = isFavorite
    ? 'card__btn--favorites card__btn--disabled'
    : 'card__btn--favorites';

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
                    <span class="card__date">${date}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};

export default class TaskView {
  constructor(task) {
    this.task = task;
  }

  getTemplate() {
    return createTaskTemplate(this.task);
  }

  getElement()
}
