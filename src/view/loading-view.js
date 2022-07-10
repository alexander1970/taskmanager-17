import AbstractView from '../framework/view/abstract-view';

const createNoTaskTemplate = () => (
  `<p class="board__no-tasks">
    Загрузка...
  </p>`
);

export default class LoadingView extends AbstractView {
  get template() {
    return createNoTaskTemplate();
  }
}
