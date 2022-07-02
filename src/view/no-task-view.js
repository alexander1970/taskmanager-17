import AbstractView from '../framework/view/abstract-view';

const createNoTaskTemplate = () => (
  `<p class="board__no-tasks">
    Нажмите «ДОБАВИТЬ НОВУЮ ЗАДАЧУ» в меню, чтобы создать свою первую задачу.
  </p>`
);

export default class NoTaskView extends AbstractView {
  get template() {
    return createNoTaskTemplate();
  }
}
