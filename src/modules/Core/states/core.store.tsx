import { create } from "zustand";

export type CoreStateType = {
  title: string;
  titles: string[];
  setTitle: (index: number) => void;
};

export const useCoreStore = create<CoreStateType>((set) => ({
  title: "Hello World!",
  titles: [
    "Hello World!",
    "Hello guys!",
    "Hello folks!",
    "Hi there!",
    "Helloooo mates!",
  ],
  setTitle: (index) => set((state) => ({ title: state.titles[index] })),
}));
