import { useState } from 'react'; 

function Counter2() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Has hecho clic {count} veces</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>    
        </div>
    );
}
export default Counter2;