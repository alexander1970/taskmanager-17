import AbstractView from '../framework/view/abstract-view';

const createTaskListTemplate = () => '<div class="board__tasks"></div>';

export default class TaskListView extends AbstractView {
  get template() {
    return createTaskListTemplate();
  }
}
