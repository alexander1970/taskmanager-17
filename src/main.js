import {render} from './framework/render.js';
import NewTaskButtonView from './view/new-task-button-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import TasksModel from './model/tasks-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import TasksApiService from './tasks-api-service.js';

const AUTHORIZATION = 'Basic LGwWbszasNNXb56L1';
const END_POINT = 'https://17.ecmascript.pages.academy/task-manager';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.main__control');

const tasksModel = new TasksModel(new TasksApiService(END_POINT, AUTHORIZATION));
const filterModel = new FilterModel();
const boardPresenter = new BoardPresenter(siteMainElement, tasksModel, filterModel);
const filterPresenter = new FilterPresenter(siteMainElement, filterModel, tasksModel);
const newTaskButtonComponent = new NewTaskButtonView();

const handleNewTaskFormClose = () => {
  newTaskButtonComponent.element.disabled = false;
};

const handleNewTaskButtonClick = () => {
  boardPresenter.createTask(handleNewTaskFormClose);
  newTaskButtonComponent.element.disabled = true;
};

filterPresenter.init();
boardPresenter.init();
tasksModel.init()
  .finally(() => {
    render(newTaskButtonComponent, siteHeaderElement);
    newTaskButtonComponent.setClickHandler(handleNewTaskButtonClick);
  });
