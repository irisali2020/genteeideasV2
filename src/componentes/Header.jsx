import React from 'react';
// 1. Importamos la imagen directamente (ajusta la ruta '../' si tu Header está en otra carpeta)
import logoEmpresa from '../pages/img/logobueno.png';

function Header() {  
    return (  
        <header style={{ backgroundColor: "rgb(76, 78, 175)", padding: "10px", textAlign: "center", color: "white" }}> 
            <div>
                <img 
                    src={logoEmpresa} 
                    alt="Logo Gente & Ideas Consultores" 
                    className='nav-logo'
                    // 2. Agregamos dimensiones explícitas (¡Cámbialas por las reales!)
                    width="74" 
                    height="68"
                    // 3. Le decimos al navegador que esta imagen es prioridad máxima
                    fetchpriority="high"
                />       
                <h1>Gente & Ideas Consultores c.a.</h1> 
            </div> 
        </header>  
    );  
}  

export default Header;