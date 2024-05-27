import styles from './Car.module.css'
function Car({ cor, fontSize }){
    let corCarro = ''
    if (cor == 'blue') {
        corCarro = "azul"
    
    }else if(cor == 'red'){
        corCarro = "Vermelho"
    }else{
        corCarro = "da cor Padrão"
    }
    return (
        <div>
            <h1 style={{color:cor, fontSize:fontSize }}>O Carro é { corCarro }</h1>
        </div>
    )
}

export default Car