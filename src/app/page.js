'use client'
import styles from './page.module.css'
import './globals.css';
import { useState } from 'react';

export default function Home() {
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [screen, setScreen] = useState("");
  const [number, setNumber] = useState("");

  function setScreenValue(para){
    setScreen((currentScreen) => currentScreen+''+para);
  }

  function setNumberValue(para){
    setScreenValue(para);
    setNumber((currentNumber) => currentNumber + "" + para);
  }

  function calculate(para){
    if(para != "="){
      let last_char = parseInt(screen.slice(-1));
      if(isNaN(last_char)){
        let screen_new_value = screen.substring(0, screen.length-1)+""+para;
        setScreen(screen_new_value);
      }else{
        setScreenValue(para);  
      }

    }else{
      setScreen("");
    }
    
    if(operator == "/"){
      setResult((currentResult) => parseInt(currentResult) / parseInt(number));

    }else if(operator == "x"){
      setResult((currentResult) => parseInt(currentResult) * parseInt(number));

    }else if(operator == "+"){
      setResult((currentResult) => parseInt(currentResult) + parseInt(number));

    }else if(operator == "-"){
      setResult((currentResult) => parseInt(currentResult) - parseInt(number));

    }else{
      setResult(number);
    }

    if(para != "="){
      setOperator(para);
    }else{
      setOperator("");
    }
    setNumber(0);
  }

  function reset(){
    setScreen("");
    setOperator("");
    setResult(0);
    setNumber(0);
  }

  return (
    <main className="main_container">
      <div className="calculator">

        <div className={styles.grid_row_result}>
          <h1 id="screen_value">{screen}</h1>
          <h2 id="resutl_value">{result}</h2>
        </div>

        <div className={styles.grid_row_one}>
          <button type="button" onClick={()=>{reset()}}>AC</button>
          <button type="button" onClick={()=>{deleteBack("delete")}}>DEL</button>
          <button type="button" onClick={()=>{calculate("/")}}>/</button>
        </div>

        <div className={styles.opration_buttons}>
          <button type="button" onClick={()=>{setNumberValue(1)}}>1</button>
          <button type="button" onClick={()=>{setNumberValue(2)}}>2</button>
          <button type="button" onClick={()=>{setNumberValue(3)}}>3</button>
          <button type="button" onClick={()=>{calculate("x")}}>x</button>
        </div>

        <div className={styles.opration_buttons}>
          <button type="button" onClick={()=>{setNumberValue(4)}}>4</button>
          <button type="button" onClick={()=>{setNumberValue(5)}}>5</button>
          <button type="button" onClick={()=>{setNumberValue(6)}}>6</button>
          <button type="button" onClick={()=>{calculate("+")}}>+</button>
        </div>

        <div className={styles.opration_buttons}>
          <button type="button" onClick={()=>{setNumberValue(7)}}>7</button>
          <button type="button" onClick={()=>{setNumberValue(8)}}>8</button>
          <button type="button" onClick={()=>{setNumberValue(9)}}>9</button>
          <button type="button" onClick={()=>{calculate("-")}}>-</button>
        </div>

        <div className={styles.grid_row_five}>
          <button type="button" onClick={()=>{setNumberValue(".")}}>.</button>
          <button type="button" onClick={()=>{setNumberValue(0)}}>0</button>
          <button type="button" onClick={()=>{calculate("=")}}>=</button>
        </div>
      </div>
    </main>
  )
}