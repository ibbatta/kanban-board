import { QueueListIcon } from "@heroicons/react/24/outline";

import { ICON_SIZES } from "$configs/constants";
import User from "$components/User";

function Header() {
  return (
    <>
      <header className="grid grid-cols-3 bg-slate-200 p-4 text-slate-600">
        <h1 className="flex items-center justify-start gap-2">
          <QueueListIcon {...ICON_SIZES.xl} />
          <span className="text-2xl uppercase">Kanban Board</span>
        </h1>
        <div className="self-center justify-self-center">&nbsp;</div>
        <div className="self-center justify-self-end">
          <User />
        </div>
      </header>
    </>
  );
}

export default Header;
