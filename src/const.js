const COLORS = ['black', 'yellow', 'blue', 'green', 'pink'];

const FilterType = {
  ALL: 'ВСЕ',
  OVERDUE: 'ПРОСРОЧЕНО',
  TODAY: 'СЕГОДНЯ',
  FAVORITES: 'важные',
  REPEATING: 'ПОВТОРЕНИЕ',
  ARCHIVE: 'АРХИВ',
};

const SortType = {
  DEFAULT: 'default',
  DATE_DOWN: 'date-down',
  DATE_UP: 'date-up',
};

const UserAction = {
  UPDATE_TASK: 'UPDATE_TASK',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

export {
  COLORS,
  FilterType,
  SortType,
  UserAction,
  UpdateType
};
