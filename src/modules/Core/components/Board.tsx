import { BoardType } from "@configs/types";

export default function Board({ title, children }: BoardType) {
  return (
    <div className="board flex h-full w-full flex-col gap-4 bg-gray-800 p-4 md:py-8">
      <div className="mx-auto w-full md:max-w-screen-lg">
        {title && (
          <h1 className="board__title mb-4 text-3xl font-bold uppercase text-white">
            {title}
          </h1>
        )}
        <section className="board__section flex flex-auto gap-2">
          {children}
        </section>
      </div>
    </div>
  );
}
