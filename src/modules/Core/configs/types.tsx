import { ReactNode } from "react";

export type StatusConstantType = Record<
  "BACKLOG" | "PROGRESS" | "DONE",
  string
>;

export type CardType = {
  id: number;
  title: string;
  date: string;
  description: string;
  FooterContent?: ReactNode;
};
