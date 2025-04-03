import PropTypes from "prop-types";
import styled from "styled-components";

const ModeloCampo = styled.div`
    background: #303741;
    border-radius: 16px;
    padding: 16px;
`;

export default function Campo({ children }) {
    return <ModeloCampo>{children}</ModeloCampo>;
}

// 🔹 Adicionando validação de props
Campo.propTypes = {
    children: PropTypes.node.isRequired, // Garante que `children` seja válido
};
