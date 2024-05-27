import React from 'react';  // <--- Adicione esta linha
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";
import Teste from "./pages/Teste/Teste";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Search from "./pages/Search/Search";
import Favorites from "./pages/Favorites/Favorites";
import FavoritesProvider from "./contexts/Favorites";
import VideoCadastre from './pages/VideoCadastre/VideoCadastre';

function AppRoutes(){
    return(
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />}></Route> 
                    <Route path="/Watch/:id" element={<Watch />}></Route> 
                    <Route path="/search/" element={<Search />}></Route> 
                    <Route path="/Teste/" element={<Teste />}></Route> 
                    <Route path="/Favorites/" element={<Favorites />}></Route> 
                    <Route path="/cadastre/" element={<VideoCadastre />}></Route> 
                    
                    {/* qualquer rota diferente das rotas acima, vá para PageNotFound  */}
                    <Route path="*" element={<PageNotFound />}></Route> 
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}
export default AppRoutes

// eu não poderia usar um Container no lugar de BrowserRouter ? Explique com mais detalhes o uso de BrowserRouter
// ChatGPT
// No contexto do react-router-dom, o componente` BrowserRouter `é essencial para habilitar o roteamento baseado no histórico da web. Usar um Container genérico no lugar do BrowserRouter não funcionaria porque o Container não possui a funcionalidade necessária para gerenciar o histórico de navegação e mapear URLs para componentes.

// O que é o BrowserRouter?
// O BrowserRouter é um componente do react-router-dom que usa a API de História do HTML5 (history API) para manter a interface de navegação do usuário sincronizada com a URL no navegador. Aqui estão alguns pontos-chave sobre ele:

// Histórico do Navegador: O BrowserRouter permite que você navegue para frente e para trás na história de navegação do navegador, manipule a barra de endereços e ouça as mudanças de URL.
// Sincronização de URL: Ele mantém a interface do usuário sincronizada com a URL no navegador.
// Envolvimento de Aplicação: Deve envolver toda a aplicação ou, pelo menos, a parte da aplicação que necessita de roteamento. É comum ver BrowserRouter no ponto mais alto da árvore de componentes.
// Como o BrowserRouter funciona?
// Quando você usa BrowserRouter, ele monitora as mudanças na URL e renderiza os componentes correspondentes conforme definido nas suas rotas. Internamente, ele usa a API de História do HTML5 para gerenciar a navegação.

// Aqui está uma visão geral do que acontece:

// Inicialização: Quando o BrowserRouter é montado, ele inicializa o histórico e começa a monitorar as mudanças na URL.
// Mudança de URL: Quando a URL muda (por exemplo, quando o usuário clica em um link ou usa os botões de navegação do navegador), o BrowserRouter detecta essa mudança.
// Renderização: O BrowserRouter re-renderiza os componentes correspondentes às novas rotas.
// Exemplo de BrowserRouter
// Vamos usar um exemplo simples para entender como o BrowserRouter é usado na prática.

// javascript
// Copiar código
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Watch from "./pages/Watch/Watch";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";

// function AppRoutes(){
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/Watch/:id" element={<Watch />} />
//                 <Route path="*" element={<PageNotFound />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default AppRoutes;
// Neste exemplo:

// O BrowserRouter envolve o componente Routes, o que permite o roteamento baseado em URL.
// O Routes contém várias Route que definem o mapeamento entre URLs e componentes.
// A URL atual determina qual componente é renderizado.
// Por que não usar um Container?
// Um Container genérico não fornece a funcionalidade necessária para gerenciar o histórico de navegação e as mudanças de URL. Ele não sabe como:

// Monitorar mudanças na barra de endereços do navegador.
// Sincronizar o estado da aplicação com a URL.
// Navegar programaticamente usando métodos como push, replace, etc.
// Essas funcionalidades são cruciais para uma aplicação de página única (SPA) e são precisamente o que o BrowserRouter oferece. Substituir BrowserRouter por um Container genérico faria com que o roteamento não funcionasse corretamente, pois o Container não tem os mecanismos internos para gerenciar o histórico de navegação e sincronizar a interface do usuário com a URL.

// Resumo
// BrowserRouter: Gerencia o histórico de navegação, sincroniza a URL com a interface do usuário e permite navegação programática.
// Container: Um contêiner genérico que não oferece nenhuma das funcionalidades necessárias para roteamento.
// Portanto, o uso de BrowserRouter é fundamental para o roteamento em uma aplicação React quando se usa react-router-dom.