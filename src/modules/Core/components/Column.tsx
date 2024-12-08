import { useState, useRef, DragEvent } from "react";

import { ColumnType, TaskType } from "$utils/types";
import { useDataStore } from "$states/store";

import Card from "./Card";
import AddTaskButton from "./AddTaskButton";

function Column({ columnId, title, tasks: columnTasks }: ColumnType) {
  const { tasks, updateAllTasks } = useDataStore();
  const [isColumnActive, setColumnActive] = useState(false);

  const placeholderColumnRef = useRef<string | null>(null);
  const placeholderCardRef = useRef<string | null>(null);

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    let isDataUpdated: boolean = false;

    const draggedCardId = e.dataTransfer.getData("id");
    const draggedCardIndex = tasks.findIndex(
      (task) => task.taskId === draggedCardId,
    );

    let cloneTasks: TaskType[] = [...tasks];

    if (placeholderCardRef.current) {
      isDataUpdated = true;
      const placeholderIndex = cloneTasks.findIndex(
        (task) => task.taskId === placeholderCardRef.current,
      );

      [cloneTasks[draggedCardIndex], cloneTasks[placeholderIndex]] = [
        cloneTasks[placeholderIndex],
        cloneTasks[draggedCardIndex],
      ];
    }

    if (placeholderColumnRef.current) {
      isDataUpdated = true;
      cloneTasks = cloneTasks.map((task: TaskType) => {
        return task.taskId === draggedCardId
          ? { ...task, status: placeholderColumnRef.current }
          : task;
      }) as TaskType[];
    }

    if (isDataUpdated) updateAllTasks(cloneTasks);

    e.dataTransfer.clearData();
    placeholderCardRef.current = null;
    placeholderColumnRef.current = null;
  };

  return (
    <section
      className={`flex h-full w-full flex-1 flex-col overflow-y-auto rounded ${isColumnActive ? "bg-amber-50/80" : "bg-slate-50"} p-2`}
      onDragOver={(e) => {
        e.preventDefault();
        setColumnActive(true);
        placeholderColumnRef.current = columnId;
      }}
      onDragLeave={() => {
        placeholderColumnRef.current = null;
        setColumnActive(false);
      }}
      onDrop={(e) => {
        handleDrop(e);
        setColumnActive(false);
      }}
    >
      <div className="mb-4 flex items-center justify-between text-slate-400">
        <span className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="text-xl">({columnTasks.length})</span>
        </span>
        <span>
          <AddTaskButton columnId={columnId} />
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {columnTasks.map((task) => {
          return (
            <Card
              key={task.taskId}
              task={task}
              onDragEnter={(cardId) => {
                if (cardId) placeholderCardRef.current = cardId;
              }}
              onDragLeave={() => {
                placeholderCardRef.current = null;
              }}
              onDrop={(e) => {
                handleDrop(e);
              }}
            />
          );
        })}
      </div>
      {columnTasks.length > 0 && (
        <div className="my-6 flex justify-center">
          <AddTaskButton columnId={columnId} />
        </div>
      )}
    </section>
  );
}

export default Column;
