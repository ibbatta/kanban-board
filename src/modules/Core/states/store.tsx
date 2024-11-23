import { create } from "zustand";

import { StateType, BoardStoreType } from "@configs/types";
import { STATUS } from "@configs/constants";

import { FAKE_DATA } from "@configs/constants";

export const useStateStore = create<StateType>((set) => ({
  states: [STATUS.BACKLOG, STATUS.PROGRESS, STATUS.DONE],
  activeTab: null,
}));

export const useBoardStore = create<BoardStoreType>((set) => ({
  cards: FAKE_DATA,
  setCards: (card) => set((state) => ({ cards: [...state.cards, card] })),
}));
