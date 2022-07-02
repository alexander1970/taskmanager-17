import AbstractView from '../framework/view/abstract-view';

const createSortTemplate = () => (
  `<div class="board__sort-list">
    <a href="#" class="board__sort-item">СОРТИРОВАТЬ ПО УМОЛЧАНИЮ</a>
    <a href="#" class="board__sort-item">СОРТИРОВАТЬ ПО ДАТЕ вверх</a>
    <a href="#" class="board__sort-item">СОРТИРОВАТЬ ПО ДАТЕ вниз</a>
  </div>`
);

export default class SortView extends AbstractView {
  get template() {
    return createSortTemplate();
  }
}
