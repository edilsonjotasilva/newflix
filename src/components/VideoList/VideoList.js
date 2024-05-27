import Card from '../Card/Card'
import styles from './VideoList.module.css'

function VideoList({videos,emptyHeading }){
 const count = ` ${videos.length}`
 // o valor inicial de heading é : `Não há vídeos sobre ${searchText}` porém se count for > 0 o valor de heading é substituido pelos valores da condicional abaixo
let heading = emptyHeading
if (count > 0) {
    const noun = count > 1 ? ' Vídeos' : ' Vídeo';
    heading = `${ count } ${noun} `
    
}
    return(
        <>
        <h2 className={count < 1 ? styles.colorMessage: ''}>{ heading}</h2>
        <section className={styles.videos}>
            {videos.map((video)=><Card id={video.id} key={video.id}/>)}
        </section>
        </>
    )
}

export default VideoList