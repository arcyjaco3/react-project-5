
import React, { useState, useEffect } from 'react';

const App = () => {

  // const [counter, setCounter] = useState(0)
  const [isActive, setIsActive] = useState(true)

  const toggleVisibility = () => { setIsActive(prevValue => !prevValue) }

  const counterComponent = isActive ? <Counter /> : null;

  return (
    <div>
      <button onClick={toggleVisibility}>Pokaz/Ukryj</button>
      {counterComponent}
    </div>
  );


}


const Counter = () => {

  const [counter, setCounter] = useState(0);

  const handleMouseMove = e => {
    setCounter(e.clientX);
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div>
      <p>{counter}</p>
      <p>{counter}</p>
      <p>Licznik</p>
    </div>
  );
}

export default App;
