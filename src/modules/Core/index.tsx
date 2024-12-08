import { STATUS } from "$configs/constants";

import Column from "$components/Column";
import { useDataStore } from "$states/store";

function Core() {
  const { tasks } = useDataStore();

  const columnsArray = Object.entries(STATUS);
  return (
    <div className="flex-stretch flex h-full flex-1 gap-4 overflow-y-hidden p-4">
      {columnsArray.map(([colKey, colName]) => {
        const filteredTasks = tasks
          .filter((task) => task.status === colKey)
          .sort((a, b) => a.priority - b.priority);

        return (
          <Column
            key={colKey}
            columnId={colKey}
            title={colName}
            tasks={filteredTasks}
          />
        );
      })}
    </div>
  );
}

export default Core;
