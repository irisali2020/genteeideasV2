import React from 'react';
import logoEmpresa from '../pages/img/logobueno.png';

function Header() {  
    return (  
        <header style={{ backgroundColor: "rgb(76, 78, 175)", padding: "10px 20px", color: "white" }}> 
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "15px" }}>
                <img 
                    src={logoEmpresa} 
                    alt="Logo Gente & Ideas Consultores" 
                    className='nav-logo'
                    width="74" 
                    height="68"
                    fetchpriority="high"
                />       
                <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Gente & Ideas Consultores</h1> 
            </div> 
        </header>  
    );  
}  

export default Header;