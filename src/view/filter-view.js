import AbstractView from '../framework/view/abstract-view';

const createFilterItemTemplate = (filter, currentFilter) => {
  const {type, name, count} = filter;

  return (
    `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${type === currentFilter ? 'checked' : ''}
      ${count === 0 ? 'disabled' : ''}
      value="${type}"
    />
    <label for="filter__all" class="filter__label">
      ${name} <span class="filter__all-count">${count}</span>
    </label>`
  );
};

const createFilterTemplate = (filterItems, currentFilter) => {
  const filterItemsTemplate = filterItems
    .map((filter)=> createFilterItemTemplate(filter, currentFilter))
    .join('');

  return (`
    <section class="main__filter filter container">
      ${filterItemsTemplate}
    </section>`
  );
};

export default class FilterView extends AbstractView {
  #filters = null;
  #currentFilter = null;

  constructor(filters, currentFilter) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilter;
  }

  get template() {
    return createFilterTemplate(this.#filters, this.#currentFilter);
  }

  setFilterTypeChangeHandler = (callback) => {
    this._callback.filterTypeChange = callback;
    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  };

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.value);
  };
}
