import Card from "$components/Card";

import fakeData from "./data/fakeData";

function Core() {
  return (
    <div>
      {fakeData.map((task, index) => {
        return <Card key={index.toString()} task={task} />;
      })}
    </div>
  );
}

export default Core;
