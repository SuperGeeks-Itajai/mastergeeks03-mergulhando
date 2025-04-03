import Titulo from "./components/Titulo";
import Campo from "./components/Campo";
import Conteudo from "./components/Conteudo";

export default function Rotas() {
  return (
    <>
      <Titulo nome="Mergulhando no React" />
      <Campo>
        <Conteudo
          foto="/src/assets/pessoa.jpg"
          nome="@pessoa1"
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </Campo>
    </>
  );
}
