import { useState } from "react";
import "./styles.css";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients"
  ];
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(7).fill(0));

  const voteHandler = () => {
    let pointsCopy = [...points];
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>
        {anecdotes[selected]} has {points[selected]} points.
      </p>
      <div>
        <button type="button" onClick={voteHandler}>
          vote
        </button>
        <button
          type="button"
          onClick={() => setSelected(Math.floor(Math.random() * 7))} //arrow function
          //returns a random integer from 0 to 7
        >
          next anecdote
        </button>
      </div>

      <div>
        <h2>Anecdote with the most votes</h2>
        <p>
          {anecdotes[points.indexOf(Math.max(...points))]} has{" "}
          {Math.max(...points)} points.
        </p>
      </div>
    </div>
  );
};

export default App;
