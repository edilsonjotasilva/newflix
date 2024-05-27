import { createContext, useContext, useState } from "react";

export const FavoritesContext  = createContext()
FavoritesContext.displayName = "MyFavorites"

// FavoritesProvider é um componente que envolve a parte da árvore de componentes que deve ter acesso ao contexto de favoritos.
export default function FavoritesProvider({ children }){
    const [favorite, setFavorite] = useState([])

    // O Provider de FavoritesContext disponibiliza os valores favorite e setFavorite para os componentes filhos.
    // <FavoritesContext.Provider value={{ favorite, setFavorite }}>: O Provider do contexto envolve os componentes filhos e fornece os valores favorite e setFavorite para eles.
    return(
        <FavoritesContext.Provider  
        value={{ favorite, setFavorite }}>
            { children }
        </FavoritesContext.Provider>
    )
}

//Hook personalizado
// useFavoriteContext é chamado em um component filho(exemplo: Card.js) para acessar favorite e addFavorite
export function useFavoriteContext(){
    const { favorite, setFavorite } = useContext(FavoritesContext)
    function addFavorite(newFavorite){

        // verifica se tem item favorito repetido
        const repeatedFavorite = favorite.some((item)=> item.id === newFavorite.id)

        //nova lista recebe lista anterior
        let newList = [...favorite]

        //verifica se nao tem item repetido e adiciona o item na lista de favoritos
        if (!repeatedFavorite) {
            newList.push(newFavorite)
            console.log('New List adicionando', newList)
            return setFavorite(newList)
        }

        //se for repetido ele vai ser tirado da lista favoritos(desfavoritar)
        newList = favorite.filter((fav)=> fav.id !== newFavorite.id)
        console.log('New list::::::::::', newList)
        return setFavorite(newList)
    }

    return{
        favorite,
        addFavorite
    }

}

