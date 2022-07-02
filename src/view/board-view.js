import AbstractView from '../framework/view/abstract-view';

const createBoardTemplate = () => '<section class="board container"></section>';

export default class BoardView extends AbstractView {
  get template() {
    return createBoardTemplate();
  }
}
