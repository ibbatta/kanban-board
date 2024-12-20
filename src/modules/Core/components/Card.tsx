import { useState, useMemo, DragEvent, MouseEvent, ChangeEvent } from "react";
import {
  EllipsisVerticalIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { ICON_SIZES, DEFAULT_PRIORITY } from "$configs/constants";
import { CardType } from "$utils/types";
import { useDataStore, useCardMenuStore } from "$states/store";

import PriorityBadge from "$components/PriorityBadge";
import { CardMenu } from "$components/Menu";

function Card({ task, onDragEnter, onDragLeave, onDrop }: CardType) {
  const {
    taskId,
    title,
    description,
    priority = DEFAULT_PRIORITY,
  } = useMemo(() => task, [task]);

  const { removeTask, updateTask } = useDataStore();
  const { currentOpen, toggleMenu } = useCardMenuStore();

  const [isCardActive, setCardActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({ ...task });

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleCardMenu = () => {
    toggleMenu(taskId);
  };

  const handleDragStart = (e: DragEvent) => {
    e.dataTransfer.setData("id", taskId);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    onDragEnter(taskId);
    setCardActive(true);
  };

  const handleDragLeave = () => {
    onDragLeave();
    setCardActive(false);
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    onDrop(e, taskId);
    setCardActive(false);
  };

  const handleContextMenu = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toggleMenu(taskId);
  };

  return (
    <article
      data-id={taskId}
      draggable={!isEditing}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onContextMenu={handleContextMenu}
      className={`${!isEditing && "cursor-grab active:cursor-grabbing active:border active:border-dashed active:border-blue-300"} rounded border bg-white ${isCardActive && "border-pink-300 bg-gray-200/70 opacity-50"}`}
    >
      {/* HEADER TITLE */}
      <header className="flex items-center justify-between border-b p-2">
        {isEditing ? (
          <input
            className="rounded px-2 py-1 text-sm ring-1 ring-blue-300"
            autoFocus
            type="text"
            name="title"
            value={formData.title}
            placeholder={title}
            onChange={handleFormChange}
          />
        ) : (
          <h3 className="text-base font-semibold text-slate-500">{title}</h3>
        )}

        {/* HEADER BUTTONS */}
        <span className="relative">
          {isEditing ? (
            <span className="flex gap-2">
              <button
                role="button"
                title="save changes"
                aria-label="save changes"
                className="rounded bg-green-100 p-1 text-green-500 transition-colors duration-300 ease-in-out hover:bg-green-200"
                onClick={() => {
                  updateTask({
                    ...task,
                    ...formData,
                  });
                  setIsEditing(false);
                }}
              >
                <CheckIcon {...ICON_SIZES.sm} />
              </button>
              <button
                role="button"
                title="cancel changes"
                aria-label="cancel changes"
                className="rounded bg-gray-100 p-1 text-gray-500 transition-colors duration-300 ease-in-out hover:bg-gray-200"
                onClick={() => setIsEditing(false)}
              >
                <XMarkIcon {...ICON_SIZES.sm} />
              </button>
            </span>
          ) : (
            <button
              role="button"
              title="open card menu"
              aria-label="open card menu"
              className="rounded bg-gray-100 p-1 text-gray-400 transition-colors duration-300 ease-in-out hover:bg-gray-200"
              onClick={toggleCardMenu}
            >
              <EllipsisVerticalIcon {...ICON_SIZES.sm} />
            </button>
          )}

          {/* CARD MENU */}
          {currentOpen === taskId && (
            <CardMenu
              onEdit={() => {
                setIsEditing(true);
                toggleCardMenu();
              }}
              onDelete={() => {
                removeTask(taskId);
              }}
              onMouseLeave={toggleCardMenu}
            />
          )}
        </span>
      </header>

      {/* DESCRIPTION */}
      <div className="mb-2 overflow-y-hidden truncate text-balance p-2 pb-0 text-base font-thin">
        {isEditing ? (
          <textarea
            className="w-full rounded px-2 py-1 text-sm ring-1 ring-blue-300"
            name="description"
            rows={5}
            value={formData.description}
            placeholder={description}
            onChange={handleFormChange}
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
            value={formData.priority}
            onChange={handleFormChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        ) : (
          <PriorityBadge level={priority} />
        )}
      </footer>
    </article>
  );
}

export default Card;
