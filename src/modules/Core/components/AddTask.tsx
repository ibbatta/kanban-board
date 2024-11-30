import { PlusCircleIcon } from "@heroicons/react/24/outline";

import { AddTaskType } from "$utils/types";

function AddTask({ columnId }: AddTaskType) {
  return (
    <div className="mt-2 flex cursor-pointer items-center gap-1 rounded border border-dashed border-gray-300 p-2 text-gray-300" onClick={(e) => {
      e.preventDefault()
      alert(`Add task in column (${columnId})`)
    }}>
      <PlusCircleIcon width={16} height={16} />
      <span className="text-xs uppercase">Add task</span>
    </div>
  );
}

export default AddTask;
