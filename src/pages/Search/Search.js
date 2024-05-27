import Container from '../../components/Container/Container'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Search.module.css'
import videos from '../../../src/videos.json'
import SearchVideoList from '../../components/SearchVideoList/SearchVideoList'
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.js";
function Search(){
    return(
        <>
        <ScrollToTopButton />
        <Header />
        <Container>
            <section className={styles.search}>
                <SearchVideoList videos={videos} />
            </section>
        </Container>
        <Footer />
        </>
    )
}

export default Search