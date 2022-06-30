import {createElement} from '../render.js';

const createNewTaskButtonTemplate = () => '<button class="control__button">+ ДОБАВИТЬ НОВУЮ ЗАДАЧУ</button>';

export default class NewTaskButtonView {
  #element = null;

  get template() {
    return createNewTaskButtonTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
