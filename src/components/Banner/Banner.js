import styles from './Banner.module.css'

function Banner({ image }){
    return(
    <div 
        className={styles.banner}
        // a pasta public é uma pasta static que fica implícita, por tanto não é preciso escrever url('/images/banner-${image}.png')todo arquivo que tiver dentro da pasta public fica disponível como se estivesse na raiz o sistema
        style={{ backgroundImage:`url('/images/banner-${image}.png')` }}
        >
    </div>
    )
}

export default Banner