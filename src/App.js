import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  var date = new Date();
  var date1 = date.setDate(new Date(date).getDate() + count);
  date = new Date(date1);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCount((s) => s - step);
        }}
      >
        -
      </button>

      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          setCount((s) => s + step);
        }}
      >
        +
      </button>
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}

        <span>{date.toDateString()}</span>
      </p>
      {step === 1 && count === 0 ? null : (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}
