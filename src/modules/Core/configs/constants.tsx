import { LevelType, StatusType } from "../utils/types";

export const STATUS: Record<StatusType, string> = {
  BACKLOG: "To Do",
  PROGRESS: "In progress",
  DONE: "Completed",
};

export const PRIORITY: Record<LevelType, [string, string]> = {
  1: ["red", "High"],
  2: ["yellow", "Medium"],
  3: ["gray", "Normal"],
  4: ["blue", "Low"],
  5: ["green", "None"],
};
