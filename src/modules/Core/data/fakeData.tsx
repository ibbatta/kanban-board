import { STORAGE_DATA_NAME } from "$configs/constants";
import { TaskType } from "$utils/types";
import { createId } from "$utils/helpers";

const data = localStorage.getItem(STORAGE_DATA_NAME);
const storageData = data ? JSON.parse(data) : null;

const fakeData: TaskType[] = storageData || [
  {
    id: createId(),
    title: "Task card title",
    priority: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "BACKLOG",
  },
  {
    id: createId(),
    title: "Task card title",
    priority: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "BACKLOG",
  },
  {
    id: createId(),
    title: "Task card title",
    priority: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "BACKLOG",
  },

  {
    id: createId(),
    title: "Task card title",
    priority: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "PROGRESS",
  },
  {
    id: createId(),
    title: "Task card title",
    priority: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "PROGRESS",
  },
  {
    id: createId(),
    title: "Task card title",
    priority: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a voluptatem consectetur velit? Sint dolores veniam maiores distinctio beatae natus dolore, ex ipsum magnam velit. Ea deserunt voluptate eligendi consequatur!",
    status: "DONE",
  },
];

export default fakeData;
