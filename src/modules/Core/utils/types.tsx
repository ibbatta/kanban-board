import { ReactNode } from "react";

export type StatusType = "BACKLOG" | "PROGRESS" | "DONE";
export type LevelType = 1 | 2 | 3 | 4 | 5;

export type PriorityType = {
  level: LevelType;
};

export type TaskType = {
  id: number;
  title: string;
  priority: LevelType;
  description: string;
  status: StatusType;
};

export type CardType = {
  task: TaskType;
  footerContent?: ReactNode;
};

export type ColumnType = {
  id: number | string;
  title: string;
  tasks: TaskType[];
};

export type AddTaskType = {
  columnId: number | string;
};
