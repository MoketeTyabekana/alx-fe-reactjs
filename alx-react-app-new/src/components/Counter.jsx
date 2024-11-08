import { useState } from 'react';

function Counter(){

  const [count, setCount]=useState(0);

  return(
    <div style={{backgroundColor:'#fff', display:'block',padding:'10px',justifyContent:'center'}}>
    <p style={{color:'#000000'}}>Current Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>
  </div>
  );

}

export default Counter;