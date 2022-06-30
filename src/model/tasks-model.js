import { generateTask } from '../mock/task';

export default class TasksModel {
  tasks = Array.from({length: 4}, generateTask);

  getTasks = () => this.tasks;
}
