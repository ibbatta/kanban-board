import { useStateStore, useBoardStore } from "@states/store";

import Board from "@components/Board";
import Column from "@components/Column";

function Core() {
  const { states } = useStateStore();
  const { cards, setCards } = useBoardStore();

  return (
    <Board title="Kanban React">
      {states.map((tab, index) => {
        return (
          <Column
            key={index.toString()}
            columnId={index}
            columnTitle={tab}
            cards={cards}
          />
        );
      })}
    </Board>
  );
}

export default Core;
