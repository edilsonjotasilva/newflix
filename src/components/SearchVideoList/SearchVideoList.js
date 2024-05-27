import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList/VideoList";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

// filtrando videos por categoria ou titulo
function filterVideos(videos, searchText) {
    const lowerCaseSearchText = searchText.toLowerCase();
    return videos.filter((video) =>video.category.toLowerCase().includes(lowerCaseSearchText) || 
    video.title.toLowerCase().includes(lowerCaseSearchText)
)
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState('')
    const foundVideos = filterVideos(videos, searchText)
    
    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
    }, [])

    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
            {
                loading ? <Loader /> : 
                <VideoList
                    videos={foundVideos}
                    emptyHeading={`Não há vídeos sobre "${searchText}"`}
                />
            }
        </section>
    );
}

export default SearchVideoList;
