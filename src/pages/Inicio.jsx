import Titulo from "../components/Titulo"
import Campo from "../components/Campo"
import Conteudo from "../components/Conteudo"

export default function Inicio() {

    return <>

        <Titulo nome="Mergulhando no React" />

        <Campo>

            <Conteudo

                foto="../assets/pessoa.jpg"

                nome="@pessoa1"

                descricao="Lorem ipsum dolor sit, amet consectetur..."

            />

            <Conteudo

                foto="../assets/passaro.jpg"

                nome="@pessoa2"

                descricao="Lorem ipsum dolor sit, amet consectetur..."

            />

        </Campo>

    </>

}