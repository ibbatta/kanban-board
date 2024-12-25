import { useState, useRef, DragEvent } from "react";

import { ColumnType, TaskType } from "$utils/types";
import { useDataStore } from "$states/store";

import Card from "./Card";
import AddTaskButton from "./AddTaskButton";

function Column({ columnId, title, columnTasks }: ColumnType) {
  const { storeTasks, updateAllTasks } = useDataStore();
  const [isColumnActive, setColumnActive] = useState(false);

  const placeholderColumnRef = useRef<string | null>(null);
  const placeholderCardRef = useRef<string | null>(null);

  const handleDragOver = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setColumnActive(true);
    placeholderColumnRef.current = columnId;
  };

  const handleDragLeave = () => {
    placeholderColumnRef.current = null;
    setColumnActive(false);
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    let isDataUpdated: boolean = false;

    const draggedCardId = e.dataTransfer.getData("id");
    const draggedCardIndex = storeTasks.findIndex(
      (task) => task.taskId === draggedCardId,
    );

    let cloneTasks: TaskType[] = [...storeTasks];

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

    e.dataTransfer.clearData();
    placeholderCardRef.current = null;
    placeholderColumnRef.current = null;
    setColumnActive(false);

    document.startViewTransition(() => {
      if (isDataUpdated) {
        updateAllTasks(cloneTasks);
      }
    });
  };

  return (
    <section
      className={`flex h-full w-full flex-1 flex-col overflow-y-auto rounded ${isColumnActive ? "bg-amber-50/80" : "bg-slate-50"} p-2`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <header className="mb-4 flex items-center justify-between text-slate-500">
        <span className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="text-xl">({columnTasks.length})</span>
        </span>
        <AddTaskButton columnId={columnId} />
      </header>
      <main className="flex flex-col gap-2">
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
      </main>
      {columnTasks.length > 0 && (
        <footer className="my-6 flex justify-center">
          <AddTaskButton columnId={columnId} text="Add task" />
        </footer>
      )}
    </section>
  );
}

export default Column;
