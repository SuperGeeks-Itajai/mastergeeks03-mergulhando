import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Postagem from "./pages/Postagem"
import Inicio from "./pages/Inicio" 

export default function Rotas() {

    return <BrowserRouter>

        <Routes>

            <Route index path="/" element={ <Inicio/> }/>
            <Route path="/postagem/:nome/:descricao" element={ <Postagem/> }/>

        </Routes>

    </BrowserRouter> 

}