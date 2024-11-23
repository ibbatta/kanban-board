import { TrashIcon } from "@heroicons/react/16/solid";

import { CardType } from "@configs/types";

export default function Card({ id, title }: CardType) {
  return (
    <article
      className="flex h-fit min-h-20 cursor-grab gap-2 rounded border border-gray-600 bg-gray-700 p-2 active:cursor-grabbing"
      draggable="true"
    >
      <div className="flex-1 text-sm text-neutral-100">{title}</div>
      <span
        className="w-fit cursor-pointer p-1"
        onClick={() => {
          alert(`Removed ${id}`);
        }}
      >
        <TrashIcon width={12} height={12} />
      </span>
    </article>
  );
}
