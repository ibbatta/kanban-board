import { PlusCircleIcon } from "@heroicons/react/24/outline";

import { AddTaskType } from "$utils/types";
import { useDataStore } from "$states/store";

function AddTask({ columnId }: AddTaskType) {
  const { addTask } = useDataStore();

  return (
    <span
      className="flex cursor-pointer items-center gap-1 rounded-full border border-dashed border-gray-400 bg-slate-200/60 px-3 py-1 text-gray-400 hover:shadow-md"
      onClick={() => addTask(columnId)}
    >
      <PlusCircleIcon width={20} height={20} />
      <span className="text-xs font-normal uppercase">Add task</span>
    </span>
  );
}

export default AddTask;
