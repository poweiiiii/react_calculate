import React from 'react'
import './App.css'
import { useState } from 'react';
import My_Calculator from './components/My_Calculator'






const App = () => {
  const [input, setInput] = useState('');

  const [result, setResult] = useState('');



  const handleClick = (value) => {

    setInput(input + value);

  };



  const handleClear = () => {

    setInput('');

    setResult('');

  };



  const handleCalculate = () => {

    try {

      setResult(eval(input).toString());

    } catch (error) {

      setResult('Error');

    }

  };
  return (
    <div>
      <div className='Display_name'></div>
      <p style={{textAlign:'center' , fontSize:'50px', fontWeight:'bold'}}>4B0G1075 曾柏崴</p>
      <div className="App">

<div className="calculator">

  <div className="display">

    <input type="text" value={input} readOnly />

    <div className="result">{result}</div>

  </div>

  <div className="buttons">

    <button onClick={() => handleClick('1')}>1</button>

    <button onClick={() => handleClick('2')}>2</button>

    <button onClick={() => handleClick('3')}>3</button>

    <button onClick={() => handleClick('+')}>+</button>

    <button onClick={() => handleClick('4')}>4</button>

    <button onClick={() => handleClick('5')}>5</button>

    <button onClick={() => handleClick('6')}>6</button>

    <button onClick={() => handleClick('-')}>-</button>

    <button onClick={() => handleClick('7')}>7</button>

    <button onClick={() => handleClick('8')}>8</button>

    <button onClick={() => handleClick('9')}>9</button>

    <button onClick={() => handleClick('*')}>*</button>

    <button onClick={() => handleClick('0')}>0</button>

    <button onClick={handleClear}>C</button>

    <button onClick={handleCalculate}>=</button>

    <button onClick={() => handleClick('/')}>/</button>

  </div>

</div>

</div>
    </div>
  )
}

export default App
