import { DragEvent } from "react";

export type StatusType = "BACKLOG" | "PROGRESS" | "DONE";

export type LevelType = 1 | 2 | 3;

export type PriorityType = {
  level: LevelType;
};

export type PriorityMapType = Record<
  LevelType,
  {
    dotColor: string;
    bgColor: string;
    textColor: string;
    label: string;
  }
>;

export type TaskType = {
  taskId: string;
  title: string;
  priority: LevelType;
  description: string;
  status: StatusType;
};

export type CardType = {
  task: TaskType;
  onDragEnter: (cardIndex?: string) => void;
  onDragLeave: (e?: DragEvent<HTMLElement>) => void;
  onDrop: (e: DragEvent<HTMLElement>, dropCardId: string) => void;
};

export type CardMenuType = {
  onEdit: () => void;
  onDelete: () => void;
  onMouseLeave: () => void;
};

export type CardMenuStoreType = {
  currentOpen: string | null;
  toggleMenu: (id: string) => void;
};

export type ColumnType = {
  columnId: string;
  title: string;
  columnTasks: TaskType[];
};

export type AddTaskType = {
  columnId: string;
  text?: string;
};

export type TaskStoreType = {
  storeTasks: TaskType[];
  addTask: (columnId: string) => void;
  removeTask: (taskId: string) => void;
  updateTask: ({ ...TaskType }) => void;
  updateAllTasks: (newTasks: TaskType[]) => void;
};
