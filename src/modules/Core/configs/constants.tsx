import { LevelType, StatusType } from "../utils/types";

export const STORAGE_DATA_NAME = "kanban-tasks";

export const STATUS: Record<StatusType, string> = {
  BACKLOG: "To Do",
  PROGRESS: "In progress",
  DONE: "Completed",
};

export const PRIORITY: Record<LevelType, string[]> = {
  1: ["bg-red-600/70", "bg-red-100", "text-red-600/70", "High"],
  2: ["bg-yellow-600/70", "bg-yellow-100", "text-yellow-600/70", "Medium"],
  3: ["bg-green-600/70", "bg-green-100", "text-green-600/70", "Low"],
  // 4: ["bg-blue-600/70", "bg-blue-100", "text-blue-600/70", "Ground"],
  // 5: ["bg-gray-600/70", "bg-gray-100", "text-gray-600/70", "Normal"],
};
