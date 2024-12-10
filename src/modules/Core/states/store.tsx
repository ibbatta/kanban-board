import { create } from "zustand";

import { STORAGE_DATA_NAME, DEFAULT_PRIORITY } from "$configs/constants";
import { TaskType, TaskStoreType, CardMenuStoreType } from "$utils/types";
import { createId } from "$utils/helpers";

import getData from "../data/getData";

const updateLocalStorage = (data: TaskType[]) => {
  localStorage.setItem(STORAGE_DATA_NAME, JSON.stringify(data));
};

export const useDataStore = create<TaskStoreType>((set, get) => ({
  storeTasks: getData,
  addTask: (columnId) => {
    set((state) => ({
      storeTasks: [
        ...state.storeTasks,
        {
          taskId: createId(),
          title: "New Task",
          description: "Description",
          priority: DEFAULT_PRIORITY,
          status: columnId,
        } as TaskType,
      ],
    }));
    updateLocalStorage(get().storeTasks);
  },
  removeTask: (taskId) => {
    set((state) => ({
      storeTasks: state.storeTasks.filter((task) => task.taskId !== taskId),
    }));
    updateLocalStorage(get().storeTasks);
  },
  updateTask: ({ taskId, title, description, priority, status }) => {
    set((state) => ({
      storeTasks: state.storeTasks.map((task) =>
        task.taskId === taskId
          ? { ...task, title, description, priority, status }
          : task,
      ),
    }));
    updateLocalStorage(get().storeTasks);
  },
  updateAllTasks: (newTasksList) => {
    set(() => ({
      storeTasks: newTasksList,
    }));
    updateLocalStorage(get().storeTasks);
  },
}));

export const useCardMenuStore = create<CardMenuStoreType>((set) => ({
  currentOpen: null,
  toggleMenu: (id) => {
    set((state) => ({
      currentOpen: state.currentOpen !== id ? id : null,
    }));
  },
}));
