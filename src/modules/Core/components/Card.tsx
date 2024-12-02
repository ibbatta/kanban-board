import { useState } from "react";
import { XMarkIcon, PencilIcon, CheckIcon } from "@heroicons/react/24/outline";

import { CardType } from "$utils/types";
import { useDataStore } from "$states/store";

import PriorityBadge from "$components/PriorityBadge";

function Card({ task }: CardType) {
  const { id, title, description, priority = 3 } = task;

  const { removeTask, updateTask } = useDataStore();

  const [isEditing, setIsEditing] = useState(false);

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newPriority, setNewPriority] = useState(priority);

  return (
    <article
      data-id={id}
      draggable={!isEditing}
      onDrag={(e) => {
        // console.log("DRAG", e);
      }}
      onDragStart={(e) => {
        e.dataTransfer.setData("id", id);
      }}
      onDragEnd={(e) => {
        // console.log("DRAG END", e);
      }}
      className={`${!isEditing && "cursor-grab active:cursor-grabbing"} rounded border bg-white`}
    >
      {/* HEADER */}
      <header className="flex items-center justify-between border-b p-2">
        {isEditing ? (
          <input
            className="rounded px-2 py-1 text-sm ring-1 ring-blue-300"
            autoFocus
            type="text"
            name="title"
            placeholder={title}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <h4 className="text-base font-semibold">{title}</h4>
        )}
        <span className="item-center flex gap-2">
          {isEditing ? (
            <button
              className="rounded bg-green-100 p-1 text-green-500 transition-colors duration-300 ease-in-out hover:bg-green-200"
              onClick={() => {
                updateTask({
                  ...task,
                  title: newTitle,
                  description: newDescription,
                  priority: newPriority,
                });
                setIsEditing(false);
              }}
            >
              <CheckIcon width={16} height={16} />
            </button>
          ) : (
            <button
              className="rounded bg-amber-100 p-1 text-amber-500 transition-colors duration-300 ease-in-out hover:bg-amber-200"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <PencilIcon width={16} height={16} />
            </button>
          )}
          <button
            className="rounded bg-red-100 p-1 text-red-500 transition-colors duration-300 ease-in-out hover:bg-red-200"
            onClick={() => {
              removeTask(id);
            }}
          >
            <XMarkIcon width={16} height={16} />
          </button>
        </span>
      </header>

      {/* DESCRIPTION */}
      <div className="mb-2 overflow-y-hidden truncate text-balance p-2 pb-0 text-base font-thin">
        {isEditing ? (
          <textarea
            className="w-full rounded px-2 py-1 text-sm ring-1 ring-blue-300"
            name="description"
            value={newDescription}
            rows={5}
            placeholder={description}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        ) : (
          <p className="line-clamp-3">{description}</p>
        )}
      </div>

      {/* FOOTER */}
      <footer className="flex items-start justify-between border-t border-dashed p-2 text-xs text-gray-500">
        {isEditing ? (
          <select
            className="w-1/2 rounded px-2 py-1 text-sm ring-1 ring-blue-300"
            name="priority"
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        ) : (
          <PriorityBadge level={priority} />
        )}
      </footer>
    </article>
  );
}

export default Card;
