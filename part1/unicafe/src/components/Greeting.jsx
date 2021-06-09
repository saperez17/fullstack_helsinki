import react from "react";

const Greeting = ({ name, bornYear }) => {
  return (
    <div>
      <h1>I'm {name}</h1>
      <h2>And i was born in {bornYear}</h2>
    </div>
  );
};

export default Greeting;
