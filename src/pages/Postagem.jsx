import Titulo from "../components/Titulo"
import Campo from "../components/Campo" 
import Conteudo from "../components/Conteudo"
import { useParams } from "react-router-dom"
import passaro from "../assets/passaro.jpg"

export default function Postagem() {

    const { nome, descricao } = useParams() 

    return <>

        <Titulo nome="Mergulhando no React"/>

        <Campo>

            <Conteudo 

                foto={passaro}

                nome={ "@" + nome }

                descricao={ descricao }

            />

        </Campo>

    </> 

}