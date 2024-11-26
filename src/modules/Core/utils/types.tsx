import { ReactNode } from "react";

export type StatusType = "BACKLOG" | "PROGRESS" | "DONE";

export type TaskType = {
  id: number;
  title: string;
  level: number;
  description: string;
  status: StatusType;
};

export type CardType = {
  task: TaskType;
  footerContent?: ReactNode;
};

export type ColumnType = {
  title: string;
  tasks: TaskType[];
};
