import {generateTask} from '../fish/task.js';

export default class TasksModel {
  tasks = Array.from({length: 4}, generateTask);

  getTasks = () => this.tasks;
}

