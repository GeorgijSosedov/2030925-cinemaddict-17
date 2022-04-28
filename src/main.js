import NewTaskButtonView from './view/new-task-button-view.js';
import {render} from './render.js';
import FilterView from './view/filter-view.js';
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

render(new NewTaskButtonView(), siteHeaderElement);
render(new FilterView(), siteMainElement);
