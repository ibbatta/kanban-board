import { create } from "zustand";

import { StateType, TabsType } from "@configs/types";
import { STATUS } from "@configs/constants";

export const useStateStore = create<StateType>((set) => ({
  states: [STATUS.TODO, STATUS.PROGRESS, STATUS.DONE],
  activeTab: null,
}));

export const useTabStore = create<TabsType>((set) => ({
  id: 0,
  cards: [],
  isActive: false,
  addCard: (data) => {
    set((state) => ({
      cards: [...state.cards, data],
    }));
  },
}));
