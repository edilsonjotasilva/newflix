import styles from './Favorites.module.css'
import Container from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import VideoList from '../../components/VideoList/VideoList'
import { useFavoriteContext } from '../../contexts/Favorites'
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.js";

function Favorites(){
// let msg = isFavorite ? 
    const {favorite }= useFavoriteContext()
    return(
        <>
            <ScrollToTopButton />
            <Header />
            <Container>
                <section className={styles.favorite}>
                    <h2>Meus favoritos</h2>
                    <p>
                    {<VideoList videos={ favorite} emptyHeading="Nenhum Favorito adicionado!" />}
                    </p>
                    
                </section>
            </Container>
            <Footer />
        </>
    )

}
export default Favorites