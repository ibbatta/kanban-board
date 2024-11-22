import { useCoreStore } from "../states/core.store";

function HelloWorld() {
  const { title, titles, setTitle } = useCoreStore();

  const randomIndex = Math.floor(Math.random() * titles.length);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-slate-200">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-thin text-slate-900">SPA Boilerplate</h1>
        <h2 className="font-bold uppercase text-slate-600">{title}</h2>
      </div>
      <button
        className="block rounded border border-solid border-white bg-slate-400 px-4 py-2 font-thin text-white hover:bg-slate-500 active:bg-slate-600"
        onClick={() => setTitle(randomIndex)}
      >
        Change message
      </button>
    </div>
  );
}

export default HelloWorld;
