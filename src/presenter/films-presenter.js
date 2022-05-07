import BoardView from '../view/board-view.js';
import SortView from '../view/sort-view.js';
import TaskListView from '../view/task-list-view.js';
import TaskEditView from '../view/task-edit-view.js';
import LoadMoreButtonView from '../view/load-more-button-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  taskListComponent = new TaskListView();

  init = (filmsContainer, filmsModel, commentsModel) => {
    this.filmsContainer = filmsContainer;
    this.filmsModel = filmsModel;
    this.commentsModel = commentsModel;
    this.films = [...this.filmsModel.getFilms()];
    this.comments = [...this.commentsModel.getComments()];
    const popupFilm = this.films[0];
  }

  render(new MainNavigationView(), this.filmsContainer);
  render(new SortView(), this.filmsContainer);

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
