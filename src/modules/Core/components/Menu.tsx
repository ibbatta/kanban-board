import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { ICON_SIZES } from "$configs/constants";
import { CardMenuType } from "$utils/types";

function UserMenu() {
  return (
    <div className="absolute right-0 top-12 z-10 w-44 divide-y divide-gray-100 rounded-lg border-2 border-slate-600 bg-white shadow-xl">
      <div className="px-4 py-3 text-sm text-gray-900">
        <div>Bonnie Green</div>
        <div className="truncate font-medium">name@flowbite.com</div>
      </div>
      <ul className="py-2 text-sm text-gray-700">
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

function CardMenu({ onEdit, onDelete, onMouseLeave }: CardMenuType) {
  return (
    <div
      onMouseLeave={onMouseLeave}
      className={`absolute right-0 top-8 z-10 w-44 divide-y divide-gray-100 rounded-lg border-2 border-slate-600 bg-white shadow-xl`}
    >
      <ul className="py-2 text-sm text-gray-700">
        <li>
          <button
            onClick={onEdit}
            className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <PencilIcon {...ICON_SIZES.sm} />
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
            <TrashIcon {...ICON_SIZES.sm} />
            <span>Delete</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export { UserMenu, CardMenu };
