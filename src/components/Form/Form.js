import styles from "./Form.module.css";
import { useState } from "react";
import { categories } from "../Category/Category";
import Swal from 'sweetalert2/'


function Form() {

    const [ url, setUrl ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ videos, setVideos ] = useState([])
    const [ msgAlert, setMsgAlert ] = useState('')
    
   
    function valideUrl(url) {
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([^&=%\?]{11})/;
        if (regex.test(url) && url.length === 43) {
           
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Cadastro realizado com Sucesso!",
                showConfirmButton: false,
                timer: 2000
              });
            return true
           
        } else {
           setMsgAlert("ERRO: URL inválida");
            return false;
        }
    }

    function onSave(e) {
        e.preventDefault()
        console.log(url, category)

        // validar category
        if(!category || category === '-') {
            console.log('Escolha uma categoria')
            setMsgAlert('ERRO: Escolha uma categoria!')
            return
        } else {
            setMsgAlert('')
        }

        // validar url
        const urlVideo = valideUrl(url)
        if(urlVideo && category) {
            // guardar a url e a category
            const newVideo = { url, category }
            setVideos([...videos, newVideo])
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
            // limpar o form
            setUrl('')
            setCategory('')
        } else {
            setMsgAlert('ERRO: URL inválida!')
        }

    }
    
    return (
        <section className={styles.container}>
            <div className="row justify-content-center ">
                <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                <h2>Cadastro de vídeo</h2>
                    <form onSubmit={onSave}>
                        <div>
                            <label>URL do vídeo</label>
                            <input
                                type="text"
                                placeholder="Digite a URL do vídeo"
                                // required="required"
                                value={url}
                                onChange={ e => setUrl(e.target.value) }
                                // minLength="43"
                                // maxLength="43"
                            />
                        </div>
                        <div>
                            <label>Categoria</label>
                            <select
                                required="required"
                                value={category}
                                onChange={ e => setCategory(e.target.value) }
                            >
                                <option value="-">Selecione uma categoria</option>
                                { categories.map(item => {
                                    return <option key={item} value={item}>{item}</option>
                                }) }
                            </select>
                        </div>
                        <div class="">
                            <input type="submit" value="Cadastrar" className={styles.buttonCadastrar}/>
                        </div>
                        <div class ="col-xs-12 d-flex justify-content-center" >
                            { msgAlert && <div className={styles.msgAlert}>{ msgAlert }</div> }
                        </div>
                    </form>
                </div>
            
            </div>
        </section>
    );
}

export default Form;