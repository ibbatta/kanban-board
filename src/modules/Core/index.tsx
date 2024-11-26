import { STATUS } from "$configs/constants";

import Column from "$components/Column";

import fakeData from "./data/fakeData";

function Core() {
  const columnsArray = Object.entries(STATUS);
  return (
    <div className="flex-stretch flex flex-1 gap-4 p-4">
      {columnsArray.map(([colKey, colName]) => {
        const filteredTasks = fakeData.filter((task) => task.status === colKey);

        return <Column key={colKey} title={colName} tasks={filteredTasks} />;
      })}
    </div>
  );
}

export default Core;
