import { SortType } from '../const';
import AbstractView from '../framework/view/abstract-view';

const createSortTemplate = (currentSortType) => (
  `<div class="board__sort-list">
    <a href="#" class="board__sort-item ${currentSortType === SortType.DEFAULT ? 'board__sort-item--acive' : ''}" date-sort-type=${SortType.DEFAULT}>
      СОРТИРОВАТЬ ПО УМОЛЧАНИЮ
    </a>
    <a href="#" class="board__sort-item ${currentSortType === SortType.DATE_UP ? 'board__sort-item--acive' : ''}" date-sort-type=${SortType.DATE_UP}>
      СОРТИРОВАТЬ ПО ВОЗВРАСТАНИЮ
    </a>
    <a href="#" class="board__sort-item ${currentSortType === SortType.DATE_DOWN ? 'board__sort-item--acive' : ''}" date-sort-type=${SortType.DATE_DOWN}>
      СОРТИРОВАТЬ ПО УБЫВАНИЮ
    </a>
  </div>`
);

export default class SortView extends AbstractView {
  #currentSortType = null;

  constructor(currentSortType) {
    super();
    this.#currentSortType = currentSortType;
  }

  get template() {
    return createSortTemplate(this.#currentSortType);
  }

  setSortTypeChangeHandler = (callback) => {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  };

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'A') {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  };
}
