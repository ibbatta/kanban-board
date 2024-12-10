import { PriorityType } from "$utils/types";
import { PRIORITY } from "$configs/constants";

function PriorityBadge({ level }: PriorityType) {
  const { dotColor, bgColor, textColor, label } = PRIORITY[level];
  return (
    <span
      className={`inline-flex items-center gap-x-1.5 rounded-full ${bgColor} px-3 py-1.5 text-xs font-medium ${textColor}`}
    >
      <span className={`inline-block size-1.5 rounded-full ${dotColor}`}></span>
      {label}
    </span>
  );
}

export default PriorityBadge;
