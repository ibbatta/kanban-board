import { QueueListIcon } from "@heroicons/react/24/outline";

import HeaderUser from "$components/HeaderUser";

function Header() {
  return (
    <>
      <header className="grid grid-cols-3 bg-slate-200 p-4 text-slate-600">
        <h1 className="flex items-center justify-start gap-2">
          <QueueListIcon width={30} height={30} />
          <span className="text-2xl">Kanban Board</span>
        </h1>
        <div className="self-center justify-self-center">———</div>
        <div className="self-center justify-self-end">
          <HeaderUser />
        </div>
      </header>
    </>
  );
}

export default Header;
