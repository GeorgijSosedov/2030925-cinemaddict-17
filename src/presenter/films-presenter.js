import FilmView from '../view/film-board-view.js';
import SortView from '../view/sort-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmEditView from '../view/film-edit-view.js';
import ShowMoreButtonView from '../view/load-more-button-view.js';
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
  
      render(filmComponent, this.#filmListComponent.element);
    };
  };
  
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
    };
