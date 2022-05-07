import NewTaskButtonView from './view/new-task-button-view.js';
import {render} from './render.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilmsModel from './model/films-model.js';
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

const filmsModel = new FilmsModel();
const boardPresenter = new BoardPresenter();

render(new NewTaskButtonView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
boardPresenter.init(siteMainElement, filmsModel);

