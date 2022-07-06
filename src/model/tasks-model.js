import Observable from '../framework/observable';
import { generateTask } from '../mock/task';

export default class TasksModel extends Observable {
  #tasks = Array.from({length: 22}, generateTask);

  get tasks() {
    return this.#tasks;
  }

  updateTask = (updateType, update) => {
    const index = this.#tasks.findIndex((task) => task.id === update.id);

    if (index === -1) {
      throw new Error('Невозможно обновить несуществующую задачу');
    }

    this.#tasks = [
      ...this.#tasks.slice(0, index),
      update,
      ...this.#tasks.slice(index + 1),
    ];

    this._notify(updateType, update);
  };

  addTask = (updateType, update) => {
    this.#tasks = [
      update,
      ...this.#tasks,
    ];

    this._notify(updateType, update);
  };

  deleteTask = (updateType, update) => {
    const index = this.#tasks.findIndex((task) => task.id === update.id);

    if (index === -1) {
      throw new Error('Невозможно удалить несуществующую задачу');
    }

    this.#tasks = [
      ...this.#tasks.slice(0, index),
      ...this.#tasks.slice(index + 1),
    ];

    this._notify(updateType);
  };
}
