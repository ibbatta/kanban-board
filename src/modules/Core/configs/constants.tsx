import { StatusType, PriorityMapType } from "$utils/types";

export const STORAGE_DATA_NAME = "kanban-tasks";
export const STORAGE_USER_NAME = "kanban-user";

export const GOOGLE_AUTH_URI = (userToken: string) =>
  `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userToken}`;

export const GOOGLE_AUTH_HEADER = (userToken: string) => {
  return {
    Authorization: `Bearer ${userToken}`,
    Accept: "application/json",
  };
};

export const STATUS: Record<StatusType, string> = {
  BACKLOG: "To Do",
  PROGRESS: "In progress",
  DONE: "Completed",
};

export const DEFAULT_PRIORITY = 3;

export const ICON_SIZES = {
  sm: {
    width: 16,
    height: 16,
  },
  base: {
    width: 24,
    height: 24,
  },
  xl: {
    width: 32,
    height: 32,
  },
};

export const PRIORITY: PriorityMapType = {
  1: {
    dotColor: "bg-red-700/70",
    bgColor: "bg-red-100",
    textColor: "text-red-700/70",
    label: "High",
  },
  2: {
    dotColor: "bg-yellow-700/70",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700/70",
    label: "Medium",
  },
  3: {
    dotColor: "bg-green-700/70",
    bgColor: "bg-green-100",
    textColor: "text-green-700/70",
    label: "Low",
  },
};
