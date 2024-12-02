export type StatusType = "BACKLOG" | "PROGRESS" | "DONE" | string;

export type LevelType = 1 | 2 | 3 | 4 | 5 | string;

export type PriorityType = {
  level: LevelType;
};

export type TaskType = {
  id: string;
  title: string;
  priority: LevelType;
  description: string;
  status: StatusType;
};

export type TaskStoreType = {
  tasks: TaskType[];
  addTask: (columnId: string) => void;
  removeTask: (taskId: string) => void;
  updateTask: ({
    id,
    title,
    description,
    priority,
    status,
  }: {
    id: string;
    title: string;
    description: string;
    priority: LevelType;
    status: StatusType;
  }) => void;
};

export type CardType = {
  task: TaskType;
};

export type ColumnType = {
  id: string;
  title: string;
  tasks: TaskType[];
};

export type AddTaskType = {
  columnId: string;
};
