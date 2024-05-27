import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from './Teste.module.css';

function Teste({ numeros = [1, 2, 3, 4, 5], filtrados = [1, 3] }) {
    // Filtra os números com base na presença no array 'filtrados'
    let numerosFiltrados = numeros.filter(numero => filtrados.includes(numero));
    // let numerosFiltrados = numeros.map((numero)=> {
    //     return numero
    // })

    return (
        <>
            <Header />
            <Container>
                <section className={styles.container}>
                    <h2>{numerosFiltrados.join(', ')}</h2>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Teste;