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
          id: createId(),
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
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
    updateLocalStorage(get().tasks);
  },
  updateTask: ({ id, title, description, priority, status }) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, title, description, priority, status }
          : task,
      ),
    }));
    updateLocalStorage(get().tasks);
  },
}));
