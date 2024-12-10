import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

function UserMenu() {
  return (
    <div
      id="userDropdown"
      className="absolute right-0 top-12 z-10 w-44 divide-y divide-gray-100 rounded-lg border-2 border-slate-600 bg-white shadow-xl"
    >
      <div className="px-4 py-3 text-sm text-gray-900">
        <div>Bonnie Green</div>
        <div className="truncate font-medium">name@flowbite.com</div>
      </div>
      <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Earnings
          </a>
        </li>
      </ul>
      <div className="py-1">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sign out
        </a>
      </div>
    </div>
  );
}

function CardMenu({
  onEdit,
  onDelete,
  position,
}: {
  onEdit: () => void;
  onDelete: () => void;
  position?: { x: number; y: number };
}) {
  console.log("positions", position);

  const cssPosition = position
    ? `right-${position.x} top-${position.y}`
    : "right-0 top-8";

  return (
    <div
      id="userDropdown"
      className={`absolute ${cssPosition} z-10 w-44 divide-y divide-gray-100 rounded-lg border-2 border-slate-600 bg-white shadow-xl`}
    >
      <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
        <li>
          <button
            onClick={onEdit}
            className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <PencilIcon width={16} height={16} />
            <span>Edit</span>
          </button>
        </li>
      </ul>
      <ul className="py-2">
        <li>
          <button
            onClick={onDelete}
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-100"
          >
            <TrashIcon width={16} height={16} />
            <span>Delete</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export { UserMenu, CardMenu };
