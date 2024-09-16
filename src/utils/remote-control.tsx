// import React, { useEffect } from "react";

// const useRemoteControl = () => {
//   useEffect(() => {
//     // Función para manejar los eventos de teclas
//     const handleKeyDown = (event: any) => {
//       switch (event.keyCode) {
//         case 13: // Enter/OK
//           console.log("Enter/OK button pressed");
//           break;
//         case 10009: // Back
//           console.log("Back button pressed");
//           //@ts-expect-error
//           tizen.application.getCurrentApplication().exit(); // Ejemplo de salida de la app
//           break;
//         case 415: // Play
//           console.log("Play button pressed");
//           // Lógica para Play
//           break;
//         case 19: // Pause
//           console.log("Pause button pressed");
//           // Lógica para Pause
//           break;
//         case 417: // Fast Forward
//           console.log("Fast Forward button pressed");
//           // Lógica para avanzar rápido
//           break;
//         case 412: // Rewind
//           console.log("Rewind button pressed");
//           // Lógica para retroceder
//           break;
//         default:
//           console.log("Unmapped key pressed: ", event.keyCode);
//       }
//     };

//     // Registrar el listener del evento keydown
//     document.addEventListener("keydown", handleKeyDown);

//     // Limpiar el listener cuando el componente se desmonte
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);
// };

// export default useRemoteControl;
import { useEffect } from "react";

const useRemoteControl = ({
  onPlay = () => {},
  onPause = () => {},
  onStop = () => {},
  onFastForward = () => {},
  onRewind = () => {},
  onBack = () => {},
  onEnter = () => {},
  onArrowUp = () => {},
  onArrowDown = () => {},
  onArrowLeft = () => {},
  onArrowRight = () => {},
}) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      switch (event.keyCode) {
        case 415: // Play
          onPlay();
          break;
        case 19: // Pause
          onPause();
          break;
        case 413: // Stop
          onStop();
          break;
        case 417: // Fast Forward
          onFastForward();
          break;
        case 412: // Rewind
          onRewind();
          break;
        case 10009: // Back
          /////@ts-expect-error
          //   tizen.application.getCurrentApplication().exit();
          onBack();
          break;
        case 8: // Back
          /////@ts-expect-error
          //   tizen.application.getCurrentApplication().exit();
          onBack();
          break;
        case 13: // Enter/OK
          onEnter();
          break;
        case 38: // Arrow Up
          onArrowUp();
          break;
        case 40: // Arrow Down
          onArrowDown();
          break;
        case 37: // Arrow Left
          onArrowLeft();
          break;
        case 39: // Arrow Right
          onArrowRight();
          break;
        default:
          console.log("Unmapped key pressed: ", event.keyCode);
      }
    };

    // Añadir el listener de eventos cuando el componente se monta
    document.addEventListener("keydown", handleKeyDown);

    // Remover el listener de eventos cuando el componente se desmonte
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    onPlay,
    onPause,
    onStop,
    onFastForward,
    onRewind,
    onBack,
    onEnter,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
  ]);
};

export default useRemoteControl;
