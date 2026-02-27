import React, { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Uso del useState</h1>
            <p>Valor del contador: {contador}</p>
 <button onClick={() => setContador(contador + 1)}>Incrementar</button>
 <button onClick={() => setContador(contador - 1)}>Disminuir</button>
        </div>
    );
}
export default Contador;