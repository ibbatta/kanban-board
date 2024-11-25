import { TrashIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

const FooterContent = (
  <div>
    <div>asd</div>
  </div>
);

function Card() {
  const title = "Title of the card";
  const date = "10/02/2025";

  return (
    <article className="rounded border bg-gray-50">
      <header className="flex items-center justify-between border-b p-2">
        <h4 className="text-base font-bold">{title}</h4>
        <button
          className="rounded bg-red-100 p-2 text-red-500 transition-colors duration-300 ease-in-out hover:bg-red-200"
          onClick={() => alert("card eliminata")}
        >
          <TrashIcon width={16} height={16} />
        </button>
      </header>
      <div className="mb-2 line-clamp-2 overflow-y-hidden truncate text-balance p-2 pb-0 text-base font-thin">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta
          facere at deleniti? Ullam cum facere, eos temporibus ad eveniet
          inventore et molestiae, cupiditate incidunt corporis architecto,
          similique reiciendis assumenda.
        </p>
      </div>
      <footer className="flex items-start justify-between border-t border-dashed p-2 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <CalendarDaysIcon width={12} height={12} />
          <span className="font-thin">{date}</span>
        </div>
        {FooterContent && <span>{FooterContent}</span>}
      </footer>
    </article>
  );
}

export default Card;
