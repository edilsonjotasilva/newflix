import Footer from "../../components/Footer/Footer.js";
import Header from "../../components/Header/Header.js";
import Banner from "../../components/Banner/Banner.js";
import Container from "../../components/Container/Container.js";
// import Car from "./components/Car/Car.js";
import Card from "../../components/Card/Card.js";
import Category,{categories, filterCategory} from "../../components/Category/Category.js";
import { useState } from "react";
import Carousel from "../../components/Carousel/Carousel.js";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.js";



function Home() {


return (
    <>
    <ScrollToTopButton />
    <Header />
    <Banner image="home" />
    <Container>
    {
        categories.map((category, index)=>
            <Category category={category}>
                <Carousel>
                    {
                        filterCategory(index).map((video)=> <Card id={video.id} key={video.id}/>)
                    }
                </Carousel>
            
            </Category>
        )
    }
    </Container>
    <Footer />
    </>
)
}
export default Home;
