import { filter } from '../utils/filter';

export const generateFilter = (tasks) => Object.entries(filter).map(
  ([filterName, filterTasks]) => ({
    name: filterName,
    count: filterTasks(tasks).length,
  }),
);
