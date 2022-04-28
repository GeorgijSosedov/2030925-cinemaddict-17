import BoardView from '../view/board-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import SortView from '../view/sort-view.js';
import TaskEditView from '../view/task-edit-view.js';
import TaskListView from '../view/task-list-view.js';
import TaskView from '../view/task-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  taskListComponent = new TaskListView();

  init = (boardContainer) => {
    const number = 3;
    this.boardContainer = boardContainer;

    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.taskListComponent, this.boardComponent.getElement());
    render(new TaskEditView(), this.taskListComponent.getElement());

    for (let i = 0; i < number; i++) {
      render(new TaskView(), this.taskListComponent.getElement());
    }

    render(new ShowMoreButtonView(), this.boardComponent.getElement());
  };
}
