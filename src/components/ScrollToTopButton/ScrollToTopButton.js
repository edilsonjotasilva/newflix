import styles from "./button.css"

function ScrollToTopButton(){
    const handleClick = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return(
        <div className={styles.button}>
        <button onClick={handleClick}>
            &#9650;
        </button>
        </div>
    )
}
export default ScrollToTopButton