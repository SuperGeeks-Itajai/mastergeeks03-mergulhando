import PropTypes from "prop-types";
import styled from "styled-components";

const ModeloConteudo = styled.div`
  background: #3b424c;

  border-radius: 16px;

  margin-bottom: 16px;

  padding: 16px;
`;
const ConteudoTopo = styled.div`
  display: flex;

  gap: 16px;
`;
const ConteudoFoto = styled.img`
  border-radius: 100%;

  height: 96px;

  width: 96px;
`;

const ConteudoNome = styled.div`
  align-self: center;

  color: #2ca8f2;
`;

const ConteudoDescricao = styled.div`
  margin-top: 16px;

  text-align: justify;
`;

export default function Conteudo({ foto, nome, descricao }) {
  return (
    <ModeloConteudo>
      <ConteudoTopo>
        <ConteudoFoto 
          src={foto || "/src/assets/pessoa.jpg"} 
          alt="foto do usuário"
        />
        <ConteudoNome>{nome}</ConteudoNome>
      </ConteudoTopo>
      <ConteudoDescricao>{descricao}</ConteudoDescricao>
    </ModeloConteudo>
  );
}

// 🔹 Validação das props com PropTypes
Conteudo.propTypes = {
  foto: PropTypes.string,
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

// 🔹 Definição de valores padrão para props opcionais
Conteudo.defaultProps = {
  foto: "/src/assets/pessoa.jpg", // Imagem padrão caso não passe uma foto
};