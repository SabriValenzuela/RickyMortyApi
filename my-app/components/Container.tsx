import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const CenteredContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto; /* Agrega margen automático para centrar el contenedor en la página */
`;

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <CenteredContainer>{children}</CenteredContainer>;
};

export default Container;
