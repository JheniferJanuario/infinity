import React, { useEffect, useState } from 'react';
import styles from './estilos/Menu.module.css';


function Menu(){
    const [top, setTop] = useState(100);

    useEffect(() => {
        const handleScroll = () => {
          setTop(100 + window.scrollY); // Acompanha o scroll
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  
    return(
        <div className={styles.Container_Maior} style={{ top: `${top}px`, position: 'absolute' }}>


            <div id={styles.Container_Menor}>
                <div id={styles.Conteudo}>
                    <img src="./images/icons/layers.png" alt="" />
                    <p id={styles.Text}>Pesquisas Recentes</p>
                </div>
                <div id={styles.Icon}>
                    <img src="/images/icons/chevron-down.png" alt="" id={styles.Seta} />
                </div>
            </div>

            <div id={styles.Container_Menor}>
                <div id={styles.Conteudo}>
                    <img src="./images/icons/dollar-sign.png" alt="" />
                    <p id={styles.Text}>Produtos Curtidos</p>
                </div>
                <div id={styles.Icon}>
                    <img src="/images/icons/chevron-down.png" alt="" id={styles.Seta} />
                </div>
            </div>
            <div id={styles.Container_Menor}>
                <div id={styles.Conteudo}>
                    <img src="./images/icons/user.png" alt="" />
                    <p id={styles.Text}>Meus Anúncios</p>
                </div>
                <div id={styles.Icon}>
                    <img src="/images/icons/chevron-down.png" alt="" id={styles.Seta} />
                </div>
            </div>

            <div id={styles.Container_Menor}>
                <div id={styles.Conteudo}>
                    <img src="./images/icons/camera.png" alt="" />
                    <p id={styles.Text}>Anunciar</p>
                </div>
                <div id={styles.Icon}>
                    <img src="/images/icons/chevron-down.png" alt="" id={styles.Seta} />
                </div>
            </div>
   
        </div>
    )

}

export default Menu