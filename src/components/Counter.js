import React,{useState,useEffect} from 'react'

const Counter = () => {

  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)

    useEffect(() => {
      console.log("Mounting...");
      console.log("Count 1..."+count);
      console.log("Count 2..."+count2);
    },[count,count2])

  return (
   <div className='App'>
    <h1 onClick={()=>setCount(count+1)}>Increment</h1>
    <h1>Counter : {count}</h1>
    
    <h1 onClick={()=>setCount2(count2+1)}>Increment 2</h1>
    <h1>Counter2 : {count2}</h1>
   </div>
  )
}

export default Counter