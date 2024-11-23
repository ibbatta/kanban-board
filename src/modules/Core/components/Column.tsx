import { useState, DragEvent } from "react";
import { ColumnType, CardType } from "@configs/types";

import Card from "./Card";

export default function Column({ columnId, columnTitle, cards }: ColumnType) {
  const [isActive, setIsActive] = useState(false);

  const filteredCard = cards.filter((card) => card.column === columnId);

  const handleDragStart = (e: DragEvent<HTMLElement>, card: CardType) => {
    console.log("drag", e, card);
    e.dataTransfer.setData("cardId", String(card.id));
  };

  return (
    <div
      id={`state-${columnId}`}
      className="section__column flex flex-1 flex-col gap-4"
      onDragOver={(e) => {
        // e.preventDefault();
      }}
    >
      <span className="section__title flex items-baseline gap-2">
        <h2 className="font-bold">{columnTitle}</h2>
        <p className="text-sm font-thin text-gray-300">
          ({filteredCard.length})
        </p>
      </span>
      <div
        className={`section__list flex flex-1 flex-col gap-2 overflow-y-scroll rounded border border-dashed border-transparent font-thin text-white transition-colors ${isActive ? "bg-gray-700/50" : "bg-gray-700/0"}`}
      >
        {filteredCard.map((cardData, index) => {
          return (
            <span
              key={index.toString()}
              onDragStart={(e) => handleDragStart(e, cardData)}
            >
              <Card {...cardData} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
