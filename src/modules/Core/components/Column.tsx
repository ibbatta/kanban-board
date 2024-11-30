import { ColumnType } from "$utils/types";

import Card from "./Card";
import AddTask from "./AddTask";

function Column({ id, title, tasks }: ColumnType) {
  return (
    <div className="flex h-full w-full flex-1 flex-col overflow-y-auto rounded bg-slate-50 p-2">
      <h2 className="mb-4 text-2xl font-bold text-slate-400">{title}</h2>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => {
          return <Card key={task.id} task={task} />;
        })}
      </div>
      <AddTask columnId={id} />
    </div>
  );
}

export default Column;
