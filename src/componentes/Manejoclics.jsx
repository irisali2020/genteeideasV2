export default function Boton() {
  function manejarClick() {
    alert('Botón clickeado!');
  }
  return (
    
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Manejo de eventos:click</h1>
            <button onClick={manejarClick}>Hacer clic</button>;
        </div>
   
)
};