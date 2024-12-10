import { create } from "zustand";

import { STORAGE_DATA_NAME } from "$configs/constants";
import { TaskType, TaskStoreType } from "$utils/types";
import { createId } from "$utils/helpers";

import getData from "../data/getData";

const updateLocalStorage = (data: TaskType[]) => {
  localStorage.setItem(STORAGE_DATA_NAME, JSON.stringify(data));
};

export const useDataStore = create<TaskStoreType>((set, get) => ({
  tasks: getData,
  addTask: (columnId) => {
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          taskId: createId(),
          title: "New Task",
          description: "Description",
          priority: 3,
          status: columnId,
        } as TaskType,
      ],
    }));
    updateLocalStorage(get().tasks);
  },
  removeTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.taskId !== taskId),
    }));
    updateLocalStorage(get().tasks);
  },
  updateTask: ({ taskId, title, description, priority, status }) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.taskId === taskId
          ? { ...task, title, description, priority, status }
          : task,
      ),
    }));
    updateLocalStorage(get().tasks);
  },
  updateAllTasks: (newTasksList) => {
    set(() => ({
      tasks: newTasksList,
    }));
    updateLocalStorage(get().tasks);
  },
}));

export const useCardMenuStore = create<{
  currentOpen: string;
  toggleMenu: (id: string) => void;
}>((set) => ({
  currentOpen: "",
  toggleMenu: (id) => {
    set((state) => ({
      currentOpen: state.currentOpen !== id ? id : "",
    }));
  },
}));
