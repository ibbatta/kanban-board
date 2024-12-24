import { create } from "zustand";

import {
  STORAGE_DATA_NAME,
  DEFAULT_PRIORITY,
  STORAGE_USER_NAME,
} from "$configs/constants";
import {
  TaskType,
  TaskStoreType,
  CardMenuStoreType,
  UserType,
  UserDataType,
} from "$utils/types";
import { createId } from "$utils/helpers";

import getData from "../data/getData";

const updateLocalStorage = (data: TaskType[]) => {
  localStorage.setItem(STORAGE_DATA_NAME, JSON.stringify(data));
};

const updateUserLocalStorage = (data: UserType | null) => {
  if (data) {
    localStorage.setItem(STORAGE_USER_NAME, JSON.stringify(data));
  }
};

const clearLocalStorage = () => {
  localStorage.removeItem(STORAGE_USER_NAME);
};

const storedUser = localStorage.getItem(STORAGE_USER_NAME);

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
    updateLocalStorage(newTasksList);
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

export const useUserStore = create<UserDataType>((set) => ({
  user: storedUser ? JSON.parse(storedUser) : null,
  setUser: (data: UserType) => {
    set(() => ({
      user: data,
    }));
    updateUserLocalStorage(data);
  },
  clearUser: () => {
    set(() => ({ user: null }));
    clearLocalStorage();
  },
}));
