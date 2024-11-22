import { useStateStore } from "@states/store";

function Core() {
  const { states } = useStateStore();

  return (
    <div className="board flex h-full flex-col gap-4 bg-gray-900 p-4">
      <h1 className="board__title mb-4 uppercase text-white">Title</h1>
      <section className="board__section flex flex-auto gap-2">
        {states.map((tab, index) => {
          return (
            <div
              key={index.toString()}
              id={`state-${index}`}
              className="section__column flex flex-1 flex-col gap-4"
            >
              <span className="section__title flex items-baseline gap-2">
                <h2 className="font-bold text-white">{tab}</h2>
                <p className="text-sm font-thin text-gray-300">(0)</p>
              </span>
              <span className="section__list flex flex-1 flex-col gap-2 rounded border border-dashed border-transparent font-thin text-white">
                {index}
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Core;
