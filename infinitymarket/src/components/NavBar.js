import React, { useEffect, useState } from 'react';
import styles from './estilos/NavBar.module.css';

function NavBar(){

     const [top, setTop] = useState(0);
    
        useEffect(() => {
            const handleScroll = () => {
              setTop(0 + window.scrollY); // Acompanha o scroll
            };
        
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
          }, []);
    return(
        <div className={styles.NavBar}>
            <div>
                <h1 id={styles.texth1} style={{ top: `${top}px`, position: 'absolute' }}>Explorar</h1>
            </div>

            <div>
                <p id={styles.texth3}>30k Produtos</p>
            </div>
        </div>
        
    )
}

export default NavBar