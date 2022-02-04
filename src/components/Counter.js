import React from 'react';
import { useState } from 'react';
export const Counter = ({value}) => {
    const[count,setCount]=useState(value);
    const increment=(count)=>{
        setCount(count);
    }
    const decrement=(count)=>{
        setCount(count);
    }
    const reset=(count)=>{
        setCount(count);
    }
    const double=(count)=>{
        setCount(count);
    }
  return <div>
            <h1>Counter: <span>{count}</span></h1>
            <button onClick={()=>increment(+count+1)}>Increment</button>
            <button onClick={()=>decrement(+count-1)}>Decrement</button>
            <button onClick={()=>double(+count*2)}>Double</button>
            <button onClick={()=>reset(value)}>reset</button>
        </div>;
};
