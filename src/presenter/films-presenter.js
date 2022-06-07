import FilmView from '../view/film-board-view.js';
import SortView from '../view/sort-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmEditView from '../view/film-edit-view.js';
import ShowMoreButtonView from '../view/show-more-button-view';
import {render} from '../render.js';

export default class FilmPresenter {
  #filmContainer = null;
  #filmsModel = null;
  
  #filmComponent = new FilmView();
  #FilmListComponent = new FilmListView();
  #boardFilms = [];

  init = (filmContainer, filmsModel) => {
    this.#filmContainer = filmContainer;
    this.#filmsModel = filmsModel;
    this.#films = [...this.#filmsModel.films()];
    const popupFilm = this.films[0];
  }

    render(this.#filmComponent, this.#filmContainer);
    render(new SortView(), this.#filmComponent.element());
    render(this.#filmListComponent, this.#filmComponent.element());
    render(new FilmEditView(this.#boardFilms[0]), this.#filmListComponent.element());

    for (let i = 0; i < this.#boardFilms.length; i++) {
      render(new FilmView(this.#BoardFilms[i]), this.#filmListComponent.element());
    }

    #renderFilm = (film) => {
      const filmComponent = new FilmView(film);
  

  
  
  const filmEditComponent = new FilmEditView(film);

    const replaceCardToForm = () => {
      this.#filmListComponent.element.replaceChild(filmEditComponent.element, filmComponent.element);
    };

    const replaceFormToCard = () => {
      this.#filmListComponent.element.replaceChild(filmComponent.element, filmEditComponent.element);
    };

    filmComponent.element.querySelector('.card__btn--edit').addEventListener('click', () => {
      replaceCardToForm();
    });

    filmEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToCard();
    });

    render(filmComponent, this.#filmListComponent.element);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };
  
  filmComponent.element.querySelector('.card__btn--edit').addEventListener('click', () => {
    replaceCardToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  filmEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToCard();
    document.removeEventListener('keydown', onEscKeyDown);
  });
  /*
    const filmsSectionElement = this.filmsContainer.querySelector('.films');
    const filmsListElement = filmsSectionElement.querySelector('.films-list');
    const filmsListContainerElement = filmsListElement.querySelector('.films-list__container');

    for (const film of this.films) {
      render(new FilmCardView(film), filmsListContainerElement);

      render(new LoadMoreButtonView(), this.filmComponent.getElement());

      renderFilmDetailsPopupView(popupFilm) {
        const siteBodyElement = document.querySelector('body');
        const filmDetailsPopup = new FilmDetailsPopupView(popupFilm);
        siteBodyElement.classList.add('hide-overflow');
        render(filmDetailsPopup, siteBodyElement);
        const commentsContainer = filmDetailsPopup.getElement().querySelector('.film-details__comments-list');
        for (const comment of popupFilm.comments) {
          render(new CommentView(this.comments[comment]), commentsContainer);
        }
      }
      1. Скачать вебпак,нпм,установить это всё + потом командами установить все расширения что были нужны
    };
*/