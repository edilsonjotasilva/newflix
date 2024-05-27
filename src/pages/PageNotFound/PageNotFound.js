
import { Link } from 'react-router-dom'
import styles from './PageNotFound.module.css'
import page404 from './erro404.png'
import Header from '../../components/Header/Header'
import Container from '../../components/Container/Container'
import Footer from '../../components/Footer/Footer'
function PageNotFound(){
    return(
        <>
        
        <Container>
        <Header />
            <section className={styles.container}>
                <div>
                    <h2>Ops! Conteúdo não localizado!</h2>
                </div>
                <div>
                    <img src={page404} alt="Página não localizada" />
                </div>
                <div className={styles.home}>
                    <Link to = "/">Página inicial</Link>
                </div>
            </section>
        <Footer />
        </Container>
        </>
    )
}
export default PageNotFound