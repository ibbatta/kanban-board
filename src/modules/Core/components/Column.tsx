import { ColumnType } from "$utils/types";

import Card from "./Card";
import AddTaskButton from "./AddTaskButton";

function Column({ id, title, tasks }: ColumnType) {
  return (
    <header className="flex h-full w-full flex-1 flex-col overflow-y-auto rounded bg-slate-50 p-2">
      <div className="mb-4 flex items-center justify-between text-slate-400">
        <span className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="text-xl">({tasks.length})</span>
        </span>
        <span>
          <AddTaskButton columnId={id} />
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => {
          return <Card key={task.id} task={task} />;
        })}
      </div>
      {tasks.length > 0 && (
        <div className="my-6 flex justify-center">
          <AddTaskButton columnId={id} />
        </div>
      )}
    </header>
  );
}

export default Column;
