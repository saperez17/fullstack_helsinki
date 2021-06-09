import { useState } from "react";
import "./styles.css";


const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const Statistic = ({ name, value }) => {
  return (
    <tr>
      <td>
        {" "}
        <strong>{name}</strong>{" "}
      </td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad, average, positiveFeedback }) => {
  if (good + neutral + bad === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistic name="good" value={good} />
            <Statistic name="neutral" value={neutral} />
            <Statistic name="bad" value={bad} />
            <Statistic name="all" value={good + neutral + bad} />
            <Statistic name="average" value={average} />
            <Statistic name="positive" value={positiveFeedback} />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGoodScore = () => setGood(good + 1);
  const increaseNeutralScore = () => setNeutral(neutral + 1);
  const increaseBadScore = () => setBad(bad + 1);

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button text="good" clickHandler={increaseGoodScore} />
        <Button text="neutral" clickHandler={increaseNeutralScore} />
        <Button text="bad" clickHandler={increaseBadScore} />
      </div>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        average={(good - bad) / (good + bad + neutral)}
        positiveFeedback={good / (good + bad + neutral)}
      />
    </div>
  );
};

export default App;
