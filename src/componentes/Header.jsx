import React from 'react';  
function Header() {  
    return (  
        <header style={{ backgroundColor: "rgb(76, 78, 175)", padding: "10px", textAlign: "center", color: "white" }}> 
            <div >
                <img src="src/pages/img/logobueno.png" alt="logo-empresa" className='nav-logo'/>       
                <h1>Bienvenidos a Gente & Ideas c.a.</h1> 
            </div> 
        </header>  
    );  
}  export default Header