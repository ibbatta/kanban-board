import { QueueListIcon } from "@heroicons/react/24/outline";

import HeaderMenu from "$components/HeaderMenu";

function Header() {
  return (
    <>
      <header className="grid grid-cols-3 bg-slate-200 p-4 text-slate-600">
        <h1 className="flex items-center justify-start gap-2">
          <QueueListIcon width={26} height={26} />
          <span className="text-xl uppercase">Kanban Board</span>
        </h1>
        <div className="self-center justify-self-center">———</div>
        <div className="self-center justify-self-end">
          <HeaderMenu />
        </div>
      </header>
    </>
  );
}

export default Header;
