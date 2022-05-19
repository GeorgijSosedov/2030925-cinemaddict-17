import FilmView from '../view/film-board-view.js';
import SortView from '../view/sort-view.js';
import FilmListView from '../view/film-list-view.js';
import FilmEditView from '../view/film-edit-view.js';
import ShowMoreButtonView from '../view/load-more-button-view.js';
import {render} from '../render.js';

export default class FilmPresenter {
  filmComponent = new FilmView();
  FilmListComponent = new FilmListView();

  init = (filmsContainer, filmsModel) => {
    this.filmsContainer = filmsContainer;
    this.filmsModel = filmsModel;
    this.films = [...this.filmsModel.getFilms()];
    const popupFilm = this.films[0];
  }

  render(this.filmComponent, this.filmContainer);
    render(new SortView(), this.filmComponent.getElement());
    render(this.filmListComponent, this.filmComponent.getElement());
    render(new FilmEditView(this.BoardFilms[0]), this.filmListComponent.getElement());

    for (let i = 1; i < this.BoardFilms.length; i++) {
      render(new FilmView(this.BoardFilms[i]), this.filmListComponent.getElement());
    }

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
