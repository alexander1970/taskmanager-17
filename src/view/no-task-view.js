import { FilterType } from '../const';
import AbstractView from '../framework/view/abstract-view';

const NoTasksTextType = {
  [FilterType.ALL]: 'Нажмите «ДОБАВИТЬ НОВУЮ ЗАДАЧУ» в меню, чтобы создать свою первую задачу.',
  [FilterType.OVERDUE]: 'Просроченных задач сейчас нет',
  [FilterType.TODAY]: 'На сегодня нет заданий',
  [FilterType.FAVORITES]: 'Сейчас нет важных задач',
  [FilterType.REPEATING]: 'Теперь нет повторяющихся задач',
  [FilterType.ARCHIVE]: 'Задач в архиве сейчас нет',
};

const createNoTaskTemplate = (filterType) => {
  const noTaskTextValue = NoTasksTextType[filterType];

  return (
    `<p class="board__no-tasks">
      ${noTaskTextValue}
    </p>`
  );
};

export default class NoTaskView extends AbstractView {
  #filterType = null;

  constructor(filterType) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createNoTaskTemplate(this.#filterType);
  }
}
