import { ReactNode } from "react";

export type StatusConstantType = "BACKLOG" | "PROGRESS" | "DONE";
export type StatusType = Record<StatusConstantType, string>;

export type TaskType = {
  id: number;
  title: string;
  level: number;
  description: string;
  status: StatusConstantType;
};

export type CardType = {
  task: TaskType;
  footerContent?: ReactNode;
};
