import {render, createElement} from '../render.js';
import FilterView from '../view/films-view.js';
import SortView from '../view/no-film-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import PopupView from '../view/popup-view.js';
import ShowMoreButtonView from '../view/new-task-bundle.js';
import NoFilmView from '../view/no-film-view.js';
import { remove } from '../framework/render.js';

const FILMS_COUNT_PER_CLICK = 5

export default class BoardPresenter {
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainerElement = createElement('<div class="films-list__container"></div>');
  showMoreButtonComponent = new ShowMoreButtonView();

#renderedFilmsCount = FILMS_COUNT_PER_CLICK;

  init(boardContainer, filmsModel) {
    this.boardContainer = boardContainer;

    render(new FilterView(), this.boardContainer);
    render(this.boardContainer);
    render(this.filmsComponent, this.boardContainer);
    this.filmsListComponent.element.appendChild(this.filmsListContainerElement);

    if (this.#boardFilms.every((film) => film.isArchive)) {
      render(new NoFilmView(), this.#filmsComponent.element);
    } else {
      render(new SortView(), this.#filmsComponent.element);
      render(this.#filmsListComponent, this.#filmsComponent.element);

      for (let i = 0; i < Math.min(this.#boardFilms.length, FILMS_COUNT_PER_CLICK); i++) {
        this.#renderTask(this.#boardFilms[i]);
      }

if (this.boardTasks.length > FILMS_COUNT_PER_CLICK) {
  render (this.showMoreButtonComponent,this.filmsComponent.element);
  
  this.showMoreButtonComponent.setClickHandler(this.#handleShowMoreButtonClick);
}

    }
  };
  #handleShowMoreButtonClick = () => {
 
    this.boardTask
    .slice(this.#renderedFilmsCount,this.#renderedFilmsCount + FILMS_COUNT_PER_CLICK)
    .forEach((film) => this.#renderFilmCard(film));

    this.#renderedFilmsCount += FILMS_COUNT_PER_CLICK

    if (this.#renderedFilmsCount >= boardTasks.length) {
      remove(this.showMoreButtonComponent)
    }
  };


  #renderFilmCard (film) {
    const filmComponent = new FilmCardView(film);
    const popupComponent = new PopupView(film);
    const popupContainerElement = document.querySelector('body');
    const popupCloseButtonElement = popupComponent.element.querySelector('.film-details__close-btn');
  
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        closePopup();
      }
    };

    const openPopup = () => {
      if (popupContainerElement.querySelector('.film-details')) {
        popupContainerElement.querySelector('.film-details').remove();
      }
      popupContainerElement.classList.add('hide-overflow');
      popupContainerElement.appendChild(popupComponent.element);
      popupCloseButtonElement.addEventListener('click', closePopup);
      document.addEventListener('keydown', onEscKeyDown);
    };

    function closePopup () {
      popupContainerElement.classList.remove('hide-overflow');
      popupContainerElement.removeChild(popupComponent.element);
      popupCloseButtonElement.removeEventListener('click', closePopup);
      document.removeEventListener('keydown', onEscKeyDown);
    }

    filmComponent.setEditClickHandler (() => {
    openPopup
    document.addEventListener ('keydown', onEscKeyDown)
    render(filmComponent, this.filmsListContainerElement);
  });
};
};








/*
СПРОСИТЬ ПРО BOARD PRESENTER
render(new FilterView(), this.boardContainer);
render(new SortView(), this.boardContainer);
render(this.filmsComponent, this.boardContainer);
render(this.filmsListComponent, this.filmsComponent.element);
this.filmsListComponent.element.appendChild(this.filmsListContainerElement);
for (let i = 0; i < Math.min(filmsModel.length,FILMS_COUNT_PER_CLICK); i++) {
  this.#renderFilmCard(filmsModel[i]);
}
if (this.boardTask.length > FILMS_COUNT_PER_CLICK) {
  render (this.#showMoreButtonComponent,this.#filmsComponent.element)
  this.#showMoreButtonComponent.element.addEventListener('click', this.#handleShowMoreButtonClick); 
    element.querySelector('.film-card__link').addEventListener('click', 
*/