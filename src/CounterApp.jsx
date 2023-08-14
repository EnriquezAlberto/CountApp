import { useState } from "react";
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

  console.log('render')
  
const [ counter, setCounter ] = useState(value)

  const handleAdd = () => {
  //console.log(event)
setCounter(counter + 1)
}

const remNum = () => {
  setCounter(counter - 1)
}

const reset = () => {
  setCounter(value)
}
  
  return (
    <>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>

    <button onClick={ handleAdd }> +1</button>
    <button onClick={ remNum }> -1 </button>
    <button onClick={ reset }> Reset </button>
    </>
  )
}

CounterApp.propType = {
    value: PropTypes.number.isRequired,
}