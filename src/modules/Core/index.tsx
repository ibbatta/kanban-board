import HelloWorld from "./components/HelloWorld";

function Core() {
  console.log("ENV:", import.meta.env.MODE);

  return <HelloWorld />;
}

export default Core;
