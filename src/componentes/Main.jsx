import React from 'react';
  
function Main({ children }) {
  return (
    <main>
      {children} {/* Sin esto, <Tarjeta /> nunca aparecerá */}
    </main>
  );
}
export default Main;  