import {createElement} from '../render.js';

const createNoTaskTemplate = () => (
  `<p class="board__no-tasks">
    Нажмите «ДОБАВИТЬ НОВУЮ ЗАДАЧУ» в меню, чтобы создать свою первую задачу.
  </p>`
);

export default class NoTaskView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createNoTaskTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
