import PropTypes from "prop-types";
import styled from "styled-components";

const ModeloTitulo = styled.div`
    color: #2da9f3;
    font-size: 32pt;
    padding: 32px 0;
     text-align: center;
`;

export default function Titulo({ nome }) {
    return <ModeloTitulo>{nome}</ModeloTitulo>;

}

// 🔹 Adicionando validação de props
Titulo.propTypes = {
    nome: PropTypes.string.isRequired, // Garante que 'nome' seja uma string obrigatória
};
