import { DocumentPlusIcon } from "@heroicons/react/24/outline";

import { ICON_SIZES } from "$configs/constants";
import { AddTaskType } from "$utils/types";
import { useDataStore } from "$states/store";

function AddTask({ columnId, text }: AddTaskType) {
  const { addTask } = useDataStore();

  return (
    <span
      className="flex cursor-pointer items-center gap-1 rounded-full border border-dashed border-slate-800 bg-slate-200/60 px-3 py-1 text-slate-800 hover:shadow-md"
      onClick={() => addTask(columnId)}
    >
      <DocumentPlusIcon {...ICON_SIZES.sm} />
      {text && <span className="text-xs font-normal uppercase">{text}</span>}
    </span>
  );
}

export default AddTask;
