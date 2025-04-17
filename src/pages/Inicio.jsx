import Titulo from "../components/Titulo"
import Campo from "../components/Campo"
import Conteudo from "../components/Conteudo"
import pessoa from "../assets/pessoa.jpg"
import passaro from "../assets/passaro.jpg"

export default function Inicio() {

    return <>

        <Titulo nome="Mergulhando no React" />

        <Campo>

            <Conteudo

                foto= {pessoa}

                nome="@pessoa1"

                descricao="Lorem ipsum dolor sit, amet consectetur..."

            />

            <Conteudo

                foto={passaro}
                nome="passaro"

                descricao="Lorem ipsum dolor sit, amet consectetur..."

            />

        </Campo>

    </>

}