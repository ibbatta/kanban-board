import { ReactNode } from "react";

export type StatusType = "BACKLOG" | "PROGRESS" | "DONE";

export type LevelType = 1 | 2 | 3 | 4 | 5 | string;

export type PriorityType = {
  level: LevelType;
};

export type TaskType = {
  id: string;
  title: string;
  priority: LevelType;
  description: string;
  status: StatusType;
};

export type TaskStoreType = {
  tasks: TaskType[];
  addTask: (columnId: string) => void;
  removeTask: (taskId: string) => void;
  updateTask: ({
    id,
    title,
    description,
    priority,
  }: {
    id: string;
    title: string;
    description: string;
    priority: LevelType;
  }) => void;
};

export type CardType = {
  task: TaskType;
  footerContent?: ReactNode;
};

export type ColumnType = {
  id: string;
  title: string;
  tasks: TaskType[];
};

export type AddTaskType = {
  columnId: string;
};
