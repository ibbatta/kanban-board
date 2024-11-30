import { ColumnType } from "$utils/types";

import Card from "./Card";
import AddTask from "./AddTask";

function Column({ id, title, tasks }: ColumnType) {
  return (
    <div className="flex h-full w-full flex-1 flex-col overflow-y-auto rounded bg-slate-50 p-2">
      <h2 className="mb-4 flex items-center justify-between text-2xl font-bold text-slate-400">
        <span>{title}</span>
        <span>
          <AddTask columnId={id} />
        </span>
      </h2>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => {
          return <Card key={task.id} task={task} />;
        })}
      </div>
      <div className="mt-6 flex justify-center">
        <AddTask columnId={id} />
      </div>
    </div>
  );
}

export default Column;
