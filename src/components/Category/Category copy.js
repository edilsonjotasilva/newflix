import styles from './Category.module.css'
import videos from '../../videos.json'


export const categories = [
    "Geografia",
    "Historia",
    "Biologia",
    "Tecnologia",
    "Matematica"
]
// export const categories = [
//     "Geografia",
//     "Como fazer e usar",
//     "Astronomia e Geografia",
//     "Climatologia, Meteorologia, Vegetação",
//     "Geologia e Hidrografia"
// ]

export function filterCategory(id){
return videos.filter(video => video.category === categories[id])
}

function Category({category, children}){

    return(
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                {children}
            </div>
        </section>
    )
}
export default Category