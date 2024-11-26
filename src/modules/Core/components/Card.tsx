import { XMarkIcon, FlagIcon } from "@heroicons/react/24/outline";
import { CardType } from "$utils/types";

import PriorityBadge from "$components/PriorityBadge";

const pickPriorityIcon = (priority: number) => {
  switch (priority) {
    case 1:
      return <PriorityBadge level={priority} text="high" />;
    case 2:
      return <PriorityBadge level={priority} text="medium" />;
    case 3:
      return <PriorityBadge level={priority} text="default" />;
    case 4:
      return <PriorityBadge level={priority} text="low" />;
    case 5:
      return <PriorityBadge level={priority} text="ground" />;
    default:
      return <PriorityBadge level={3} text="default" />;
  }
};

function Card({ task, footerContent }: CardType) {
  const { id, title, description, priority = 3 } = task;

  return (
    <article
      draggable="true"
      className="cursor-grab rounded border bg-white active:cursor-grabbing"
    >
      <header className="flex items-center justify-between border-b p-2">
        <h4 className="text-base font-semibold">{title}</h4>
        <button
          className="rounded bg-red-100 p-1 text-red-500 transition-colors duration-300 ease-in-out hover:bg-red-200"
          onClick={(e) => {
            e.preventDefault();
            alert(`Card eliminata: ${id}`);
          }}
        >
          <XMarkIcon width={12} height={12} />
        </button>
      </header>
      <div className="mb-2 line-clamp-2 overflow-y-hidden truncate text-balance p-2 pb-0 text-base font-thin">
        <p>{description}</p>
      </div>
      <footer className="flex items-start justify-between border-t border-dashed p-2 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <FlagIcon width={12} height={12} />
          <span>{pickPriorityIcon(priority)}</span>
        </div>
        {footerContent && <span>{footerContent}</span>}
      </footer>
    </article>
  );
}

export default Card;
