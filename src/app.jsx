import { useState } from 'react'; 
import Counter from './Counter.jsx'
import Counter2 from './Counter2.jsx' 

export function App() {
  const [count, setCount] = useState(0); 
  return (
    <div>
      <Counter conteo={count} establecer={setCount}></Counter>
      <Counter2></Counter2>
    </div>
  )
}
