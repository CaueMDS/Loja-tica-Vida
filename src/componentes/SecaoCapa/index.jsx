import styles from './SecaoCapa.module.css'

export default function SecaoCapa(){
    return(
        <div className={styles.capa}>
            <div className={styles.container_texto}>
                <div className={styles.textos}>
                    <p>Preços baixos e </p>
                    <h2 className={styles.paragrafo_destaque}>Óculos de grau e de sol</h2> 
                    <p>Você só encontra aqui</p>
                </div>   
            </div>
        </div>
    )
}