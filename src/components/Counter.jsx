import { useState } from "react"

// imutabilidade = não alterar valor original da variável já alocada na memória
// Em React o certo é criar um novo espaço na memoria com nova informação

export function Counter() {
    const [counter, setCounter] = useState(0)
    
    function increment() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>{ counter }</h2>
            <button type="button" onClick={increment}>
                Increment 
            </button>
        </div>
    )
}