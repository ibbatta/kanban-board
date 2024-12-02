import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { CardType } from "$utils/types";
import { useDataStore } from "$states/store";

import PriorityBadge from "$components/PriorityBadge";

function Card({ task, footerContent }: CardType) {
  const { id, title, description, priority = 3 } = task;

  const { tasks, removeTask, updateTask } = useDataStore();

  const [isEditTitle, setIsEditTitle] = useState(false);
  const [isEditDescription, setIsEditDescription] = useState(false);
  const [isEditPriority, setIsEditPriority] = useState(false);

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newPriority, setNewPriority] = useState(priority);

  return (
    <article
      data-id={id}
      draggable="true"
      className="cursor-grab rounded border bg-white active:cursor-grabbing"
    >
      <header
        className="flex items-center justify-between border-b p-2"
        onClick={() => setIsEditTitle(true)}
      >
        {isEditTitle ? (
          <input
            className="rounded px-2 py-1 text-sm ring-1 ring-blue-300"
            autoFocus
            type="text"
            name="title"
            placeholder={title}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={() => {
              updateTask({
                ...task,
                title: newTitle,
              });
              setIsEditTitle(false);
            }}
          />
        ) : (
          <h4 className="cursor-pointer text-base font-semibold">{title}</h4>
        )}
        <button
          className="rounded bg-red-100 p-1 text-red-500 transition-colors duration-300 ease-in-out hover:bg-red-200"
          onClick={() => {
            removeTask(id);
          }}
        >
          <XMarkIcon width={12} height={12} />
        </button>
      </header>
      <div
        className="mb-2 cursor-pointer overflow-y-hidden truncate text-balance p-2 pb-0 text-base font-thin"
        onClick={() => setIsEditDescription(true)}
      >
        {isEditDescription ? (
          <textarea
            className="w-full rounded px-2 py-1 text-sm ring-1 ring-blue-300"
            name="description"
            autoFocus
            rows={5}
            placeholder={description}
            onChange={(e) => setNewDescription(e.target.value)}
            onBlur={() => {
              updateTask({
                ...task,
                description: newDescription,
              });
              setIsEditDescription(false);
            }}
          />
        ) : (
          <p className="line-clamp-3">{description}</p>
        )}
      </div>
      <footer className="flex items-start justify-between border-t border-dashed p-2 text-xs text-gray-500">
        {isEditPriority ? (
          <input
            className="rounded px-2 py-1 text-sm ring-1 ring-blue-300"
            autoFocus
            type="number"
            name="priority"
            placeholder={priority.toString()}
            min={1}
            max={5}
            onChange={(e) => setNewPriority(e.target.value)}
            onBlur={() => {
              updateTask({
                ...task,
                priority: newPriority,
              });
              setIsEditPriority(false);
            }}
          />
        ) : (
          <span
            className="cursor-pointer"
            onClick={() => setIsEditPriority(true)}
          >
            <PriorityBadge level={priority} />
          </span>
        )}
        {footerContent && <span>{footerContent}</span>}
      </footer>
    </article>
  );
}

export default Card;
