import React from "react";
import styled from "styled-components";

// Estilos del fondo del modal que cubre toda la pantalla
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* Asegura que el ancho sea del 100% de la ventana */
  height: 100vh; /* Asegura que la altura sea del 100% de la ventana */
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro con transparencia */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Asegura que el modal esté por encima de otros elementos */
`;

// Estilos del contenido del modal
const ModalContent = styled.div<{ maxWidth?: string; fullscreen?: boolean }>`
  background-color: white;
  // padding: 20px;
  border-radius: 4px;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ fullscreen }) => fullscreen && `width: 100%; height: 100vh;`}
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
`;

// Estilos del botón de cierre
// const CloseButton = styled.span`
//   color: #aaa;
//   font-size: 28px;
//   font-weight: bold;
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   right: 15px;

//   &:hover,
//   &:focus {
//     color: black;
//   }
// `;

// Componente del modal
function Modal({
  show,
  onClose,
  children,
}: {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!show) {
    return null;
  }

  return (
    <ModalBackground>
      <ModalContent fullscreen>
        {/* <CloseButton onClick={onClose}>&times;</CloseButton> */}
        {children}
      </ModalContent>
    </ModalBackground>
  );
}

export default Modal;
