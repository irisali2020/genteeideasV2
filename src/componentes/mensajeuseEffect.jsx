import React, { useEffect } from 'react';

export default function Mensaje() {
  useEffect(() => {
    console.log('El componente se ha montado.');
    return () => {
      console.log('El componente se ha desmontado.');
    };
  }, []);

  return <h1>Hola, React!</h1>;
}
