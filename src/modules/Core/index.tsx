import { useMemo } from "react";

import { STATUS } from "$configs/constants";

import Column from "$components/Column";
import { useDataStore } from "$states/store";

import Header from "$components/Header";
import Footer from "$components/Footer";

function Core() {
  const { storeTasks } = useDataStore();

  const columnsArray = useMemo(() => Object.entries(STATUS), []);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-stretch m-auto flex h-full max-w-[1000px] flex-auto gap-2 overflow-y-hidden p-2">
        {columnsArray.map(([colKey, colName]) => {
          const filteredTasks = storeTasks
            .filter((task) => task.status === colKey)
            .sort((a, b) => a.priority - b.priority);

          return (
            <Column
              key={colKey}
              columnId={colKey}
              title={colName}
              columnTasks={filteredTasks}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default Core;
