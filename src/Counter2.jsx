import { useState } from 'react'; 

function Counter2() {
    const [count, setCount] = useState(0);

    const [countValor, setCountValor] = useState(0);
    const [valor, setValor] = useState(0);
    return (
        <div>
            <hr />
            <p>Has hecho clic {count} veces</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button> 
            <br />
            <hr />
            <p>Valor dinamico {valor}</p>
            <p>Has hecho clic {countValor} veces</p>
            <input type="number" value={valor} onChange={(e) => setValor(Number(e.target.value))}/>   
            <button onClick={() => setCountValor(countValor + valor)}>Incrementar por valor</button>
            <button onClick={() => setCountValor(countValor - valor)}>Decrementar por valor</button>
        </div>
    );
}
export default Counter2;