import { PriorityType } from "$utils/types";
import { PRIORITY } from "$configs/constants";

function PriorityBadge({ level }: PriorityType) {
  return (
    <span
      className={`me-2 rounded border border-${PRIORITY[level][0]}-700/30 bg-${PRIORITY[level][0]}-100 px-2.5 py-0.5 text-xs font-medium text-${PRIORITY[level][0]}-600/70`}
    >
      {PRIORITY[level][1]}
    </span>
  );
}

export default PriorityBadge;
