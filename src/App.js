import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState([]);
  const [result, setResult] = useState(0);

  const clickHandler = (val) => {
    let data = [...value];
    data.push(val);
    setValue(data.join(""));
  };
  const resetHandler = () => {
    setValue([]);
    setResult(0);
  };
  const operatorHandler = () => {
    let data = [...value];
    if (data[data.length - 1] !== "+") {
      data.push("+");
    } else {
      return false;
    }
    setValue(data);
  };
  const AddHandler = () => {
    let valueD;
    if (value[value.length - 1] !== "+") {
      valueD = value.split("+").map((x) => +x);
      var sum = valueD.reduce(function (a, b) {
        return a + b;
      }, 0);
      setResult(sum);
    } else {
      return false;
    }
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="outputConsole">
          <p>{value}</p>
          <h2>{result}</h2>
        </div>
        <div className="keysWrapper">
          <ul>
            <li onClick={resetHandler}>C</li>
            <li>+/-</li>
            <li>%</li>
            <li onClick={() => clickHandler(7)}>7</li>
            <li onClick={() => clickHandler(8)}>8</li>
            <li onClick={() => clickHandler(9)}>9</li>
            <li onClick={() => clickHandler(4)}>4</li>
            <li onClick={() => clickHandler(5)}>5</li>
            <li onClick={() => clickHandler(6)}>6</li>
            <li onClick={() => clickHandler(1)}>1</li>
            <li onClick={() => clickHandler(2)}>2</li>
            <li onClick={() => clickHandler(3)}>3</li>
            <li className="zero" onClick={() => clickHandler(0)}>
              0
            </li>
            <li>.</li>
          </ul>
          <ul className="listGredient">
            <li>÷</li>
            <li>x</li>
            <li>-</li>
            <li onClick={operatorHandler}>+</li>
            <li onClick={AddHandler}>=</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
