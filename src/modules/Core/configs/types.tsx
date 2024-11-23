import { ReactNode } from "react";

export type StatusConstantType = Record<
  "BACKLOG" | "PROGRESS" | "DONE",
  string
>;

export type CardType = {
  id: number;
  title: string;
  column: number;
};

export type BoardType = {
  title?: string;
  children: ReactNode;
};

export type BoardStoreType = {
  cards: CardType[];
  setCards: (card: CardType) => void;
};

export type ColumnType = {
  columnId: number;
  columnTitle: string;
  cards: CardType[] | [];
};

export type StateType = {
  states: string[];
  activeTab: number | null;
  // setActiveTab: (id: number) => void;
};
