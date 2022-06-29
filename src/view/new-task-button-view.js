import {createElement} from '../render.js';

const createNewTaskButtonTemplate = () => '<button class="control__button">+ ДОБАВИТЬ НОВУЮ ЗАДАЧУ</button>';

export default class NewTaskButtonView {
  getTemplate() {
    return createNewTaskButtonTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
