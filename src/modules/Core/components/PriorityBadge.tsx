import { PriorityType } from "$utils/types";

const priorityColorMap = {
  1: "red",
  2: "yellow",
  3: "gray",
  4: "blue",
  5: "green",
};

function PriorityBadge({ level = 3, text }: PriorityType) {
  const color = priorityColorMap[level];
  return (
    <span
      className={`inline-flex items-center gap-x-1.5 rounded-lg border bg-${color}-200 px-3 py-1.5 text-xs font-medium text-${color}-600 border-${color}-600/10 bg-gree`}
    >
      {text}
    </span>
  );
}

export default PriorityBadge;
