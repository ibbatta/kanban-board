import { STORAGE_DATA_NAME } from "$configs/constants";
import { TaskType } from "$utils/types";
import { createId } from "$utils/helpers";

const data = localStorage.getItem(STORAGE_DATA_NAME);
const storageData = data ? JSON.parse(data) : null;

const fakeData: TaskType[] = storageData || [
  {
    taskId: createId(),
    title: "Task 0",
    priority: 1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    status: "BACKLOG",
  },
  {
    taskId: createId(),
    title: "Task 1",
    priority: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "BACKLOG",
  },
  {
    taskId: createId(),
    title: "Task 2",
    priority: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "BACKLOG",
  },
  {
    taskId: createId(),
    title: "Task 3",
    priority: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "BACKLOG",
  },

  {
    taskId: createId(),
    title: "Task 4",
    priority: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "PROGRESS",
  },
  {
    taskId: createId(),
    title: "Task 5",
    priority: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "PROGRESS",
  },
  {
    taskId: createId(),
    title: "Task 6",
    priority: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "DONE",
  },
];

export default fakeData;
