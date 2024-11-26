import { ColumnType } from "$utils/types";

import Card from "./Card";

function Column({ title, tasks }: ColumnType) {
  return (
    <div className="flex flex-1 flex-col rounded bg-slate-50 p-2">
      <h2 className="mb-4 text-xl">{title}</h2>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => {
          return <Card key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}

export default Column;
