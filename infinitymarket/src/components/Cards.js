import styles from './estilos/Cards.module.css';

function Cards() {
  return (

    <div className={styles.Conteudo}>
      <div className={styles.Alinhamento_Card}>
        <div className={styles.Card}>
              <img src="/images/produtos/produto1.png" alt="Produto" />
              <div className={styles.TextCard}>
                <p id={styles.TextName}>Nome Produto</p>
                <p id={styles.TextDescricao}>Descrição do Produto</p>
                <b><p id={styles.TextLoc}>Localização do produto</p></b>
              </div>
                <input type="checkbox" id="heart1" className={styles["heart-checkbox"]} />
                <label htmlFor="heart1" className={styles["heart-label"]}></label>     
  
        </div>

        <div className={styles.Card}>
              <img src="/images/produtos/produto1.png" alt="Produto" />
              <div className={styles.TextCard}>
                <p id={styles.TextName}>Nome Produto</p>
                <p id={styles.TextDescricao}>Descrição do Produto</p>
                <b><p id={styles.TextLoc}>Localização do produto</p></b>
              </div>
                <input type="checkbox" id="heart2" className={styles["heart-checkbox"]} />
                <label htmlFor="heart2" className={styles["heart-label"]}></label>     
  
        </div>

        <div className={styles.Card}>
              <img src="/images/produtos/produto1.png" alt="Produto" />
              <div className={styles.TextCard}>
                <p id={styles.TextName}>Nome Produto</p>
                <p id={styles.TextDescricao}>Descrição do Produto</p>
                <b><p id={styles.TextLoc}>Localização do produto</p></b>
              </div>
                <input type="checkbox" id="heart3" className={styles["heart-checkbox"]} />
                <label htmlFor="heart3" className={styles["heart-label"]}></label>     
  
        </div>

        <div className={styles.Card}>
              <img src="/images/produtos/produto1.png" alt="Produto" />
              <div className={styles.TextCard}>
                <p id={styles.TextName}>Nome Produto</p>
                <p id={styles.TextDescricao}>Descrição do Produto</p>
                <b><p id={styles.TextLoc}>Localização do produto</p></b>
              </div>
                <input type="checkbox" id="heart4" className={styles["heart-checkbox"]} />
                <label htmlFor="heart4" className={styles["heart-label"]}></label>     
  
        </div>
      
      </div>

      <div className={styles.Alinhamento_Card}>
      <div className={styles.Card}>
              <img src="/images/produtos/produto1.png" alt="Produto" />
              <div className={styles.TextCard}>
                <p id={styles.TextName}>Nome Produto</p>
                <p id={styles.TextDescricao}>Descrição do Produto</p>
                <b><p id={styles.TextLoc}>Localização do produto</p></b>
              </div>
                <input type="checkbox" id="heart5" className={styles["heart-checkbox"]} />
                <label htmlFor="heart5" className={styles["heart-label"]}></label>     
  
        </div>

        <div className={styles.Card}>
              <img src="/images/produtos/produto1.png" alt="Produto" />
              <div className={styles.TextCard}>
                <p id={styles.TextName}>Nome Produto</p>
                <p id={styles.TextDescricao}>Descrição do Produto</p>
                <b><p id={styles.TextLoc}>Localização do produto</p></b>
              </div>
                <input type="checkbox" id="heart6" className={styles["heart-checkbox"]} />
                <label htmlFor="heart6" className={styles["heart-label"]}></label>     
  
        </div>

        <div className={styles.Card}>
              <img src="/images/produtos/produto1.png" alt="Produto" />
              <div className={styles.TextCard}>
                <p id={styles.TextName}>Nome Produto</p>
                <p id={styles.TextDescricao}>Descrição do Produto</p>
                <b><p id={styles.TextLoc}>Localização do produto</p></b>
              </div>
                <input type="checkbox" id="heart7" className={styles["heart-checkbox"]} />
                <label htmlFor="heart7" className={styles["heart-label"]}></label>     
  
        </div>

        <div className={styles.Card}>
              <img src="/images/produtos/produto1.png" alt="Produto" />
              <div className={styles.TextCard}>
                <p id={styles.TextName}>Nome Produto</p>
                <p id={styles.TextDescricao}>Descrição do Produto</p>
                <b><p id={styles.TextLoc}>Localização do produto</p></b>
              </div>
                <input type="checkbox" id="heart8" className={styles["heart-checkbox"]} />
                <label htmlFor="heart8" className={styles["heart-label"]}></label>     
  
        </div>

      </div>


    </div>
    

    

  

  );
}

export default Cards;
