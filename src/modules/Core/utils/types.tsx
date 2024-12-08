import { DragEvent } from "react";

export type StatusType = "BACKLOG" | "PROGRESS" | "DONE";

export type LevelType = 1 | 2 | 3;

export type PriorityType = {
  level: LevelType;
};

export type TaskType = {
  taskId: string;
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
    taskId,
    title,
    description,
    priority,
    status,
  }: TaskType) => void;
  updateAllTasks: (newTasks: TaskType[]) => void;
};

export type CardType = {
  task: TaskType;
  onDragEnter: (cardIndex?: string) => void;
  onDragLeave: () => void;
  onDrop: (e: DragEvent<HTMLElement>, dropCardId: string) => void;
};

export type ColumnType = {
  columnId: string;
  title: string;
  tasks: TaskType[];
};

export type AddTaskType = {
  columnId: string;
};
