import {createElement} from '../render.js';

const createSortTemplate = () => (
  `<div class="board__sort-list">
    <a href="#" class="board__sort-item">СОРТИРОВАТЬ ПО УМОЛЧАНИЮ</a>
    <a href="#" class="board__sort-item">СОРТИРОВАТЬ ПО ДАТЕ вверх</a>
    <a href="#" class="board__sort-item">СОРТИРОВАТЬ ПО ДАТЕ вниз</a>
  </div>`
);

export default class SortView {
  getTemplate() {
    return createSortTemplate();
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
