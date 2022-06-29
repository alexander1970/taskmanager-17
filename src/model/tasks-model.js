import { generateTask } from '../mock/task';

export default class TasksModel {
  tasks = Array.from({length: 3}, generateTask);

  getTasks = () => this.tasks;
}
