import { ReactNode } from "react";

export type StatusType = "BACKLOG" | "PROGRESS" | "DONE";

export type PriorityType = {
  level: 1 | 2 | 3 | 4 | 5;
  text: string;
};

export type TaskType = {
  id: number;
  title: string;
  priority: Pick<PriorityType, "level">;
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
