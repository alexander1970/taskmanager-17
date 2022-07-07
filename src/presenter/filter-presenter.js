import { FilterType, UpdateType } from '../const';
import { remove, render, replace } from '../framework/render';
import { filter } from '../utils/filter';
import FilterView from '../view/filter-view';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #tasksModel = null;

  #filterComponent = null;

  constructor(filterContainer, filterModel, tasksModel) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#tasksModel = tasksModel;

    this.#tasksModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const tasks = this.#tasksModel.tasks;

    return [
      {
        type: FilterType.ALL,
        name: 'ВСЕ',
        count: filter[FilterType.ALL](tasks).length,
      },
      {
        type: FilterType.OVERDUE,
        name: 'ПРОСРОЧЕНО',
        count: filter[FilterType.OVERDUE](tasks).length,
      },
      {
        type: FilterType.TODAY,
        name: 'СЕГОДНЯ',
        count: filter[FilterType.TODAY](tasks).length,
      },
      {
        type: FilterType.FAVORITES,
        name: 'ИЗБРАННОЕ',
        count: filter[FilterType.FAVORITES](tasks).length,
      },
      {
        type: FilterType.REPEATING,
        name: 'ПОВТОРЕНИЕ',
        count: filter[FilterType.REPEATING](tasks).length,
      },
      {
        type: FilterType.ARCHIVE,
        name: 'АРХИВ',
        count: filter[FilterType.ARCHIVE](tasks).length,
      },
    ];
  }

  init = () => {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView(filters, this.#filterModel.filter);
    this.#filterComponent.setFilterTypeChangeHandler(this.#handleFilterTypeChange);

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  };

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.filter.setFilter(UpdateType.MAJOR, filterType);
  };
}
