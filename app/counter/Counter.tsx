'use client'
import { useState } from "react"

const Counter = () => {
        const [count,setCount]=useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)} className="px-7 py-5 border-none rounded-md bg-indigo-400 hover:bg-indigo-600 hover:text-white">Increament</button>
    </div>
  )
}

export default Counter