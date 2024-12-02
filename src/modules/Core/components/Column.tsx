import { useState, DragEvent } from "react";

import { ColumnType, StatusType, TaskType } from "$utils/types";

import { useDataStore } from "$states/store";

import Card from "./Card";
import AddTaskButton from "./AddTaskButton";

function Column({ id, title, tasks: columnTasks }: ColumnType) {
  const [isActive, setIsActive] = useState(false);
  const { tasks, updateTask } = useDataStore();

  const handleDrop = (
    e: DragEvent<HTMLElement>,
    status: StatusType,
    storeTasks: TaskType[],
  ) => {
    const draggedCardId = e.dataTransfer.getData("id");
    const currentTaskDragged = storeTasks.find(
      (task) => task.id === draggedCardId,
    );
    if (currentTaskDragged) updateTask({ ...currentTaskDragged, status });
  };
  return (
    <section
      className={`flex h-full w-full flex-1 flex-col overflow-y-auto rounded ${isActive ? "bg-amber-50/80" : "bg-slate-50"} p-2`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsActive(true);
      }}
      onDragLeave={() => {
        setIsActive(false);
      }}
      onDrop={(e) => {
        handleDrop(e, id, tasks);
        setIsActive(false);
      }}
    >
      <div className="mb-4 flex items-center justify-between text-slate-400">
        <span className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="text-xl">({columnTasks.length})</span>
        </span>
        <span>
          <AddTaskButton columnId={id} />
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {columnTasks.map((task) => {
          return <Card key={task.id} task={task} />;
        })}
      </div>
      {columnTasks.length > 0 && (
        <div className="my-6 flex justify-center">
          <AddTaskButton columnId={id} />
        </div>
      )}
    </section>
  );
}

export default Column;
