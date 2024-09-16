import {
  FocusContext,
  KeyPressDetails,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import styled from "styled-components";
import useRemoteControl from "../utils/remote-control";
import { useEffect } from "react";

interface StyledButtonProps {
  focused: boolean;
}

// Definimos la interfaz para las props del componente Button
interface ButtonProps {
  children: React.ReactNode;
  onEnterPress?: (props: object, details: KeyPressDetails) => void;
}

const StyledButton = styled.div<StyledButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;

  cursor: pointer;
  transition: all 0.3s ease;
  width: 180px;
  /* Estilos base */

  background-color: ${({ focused }) => (focused ? "#3498db" : "transparent")};
  border: 2px solid ${({ focused }) => (focused ? "#3498db" : "#49CCE6")};
  color: ${({ focused }) => (focused ? "white" : "#49CCE6")};

  /* Estilos cuando está enfocado */
  ${({ focused }) =>
    focused &&
    `
      
      box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
      transform: scale(1.05);
    `}

  &:hover {
    background-color: #2980b9;
  }
`;

function Button({ children, onEnterPress }: ButtonProps): JSX.Element {
  const { ref, focused } = useFocusable({
    onEnterPress,
  });

  return (
    <StyledButton ref={ref} focused={focused}>
      <span style={{ display: "block", textAlign: "center" }}>{children}</span>
    </StyledButton>
  );
}

const DetailsPage = ({
  showPlayer,
  onBack,
}: {
  showPlayer?: () => void;
  onBack?: () => void;
}) => {
  useRemoteControl({
    onBack,
  });
  const { ref, focusKey, focusSelf } = useFocusable({
    focusKey: "DETAILS",
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);
  console.log("dddd");

  return (
    <AppContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          // backgroundColor: "white",
          height: "100%",
          width: "100%",
          padding: 20,
        }}
      >
        <div style={{ width: "100%", margin: "auto" }}>
          <img
            src="https://cdn.pixabay.com/photo/2018/11/06/22/29/land-3799279_1280.jpg"
            alt="details"
            width="100%"
            style={{
              position: "absolute",
              top: "10%",
              bottom: "10%",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              //   height: "100%",
              top: "10%",
              padding: "54px",
              display: "flex",
              gap: "12px",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "34px",
                color: "white",
                maxWidth: "450px",
                display: "inline-block",
                fontWeight: 500,
              }}
            >
              2023 First presidency Christmas Devotional
            </span>

            <FocusContext.Provider value={focusKey}>
              <div ref={ref} style={{ display: "flex", gap: "30px" }}>
                <Button onEnterPress={showPlayer}>Play</Button>

                <Button onEnterPress={() => false}>Start Over</Button>
              </div>
            </FocusContext.Provider>
            <span
              style={{
                fontSize: "18px",
                color: "white",
                maxWidth: "450px",
                display: "inline-block",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              autem officiis voluptatem nobis consectetur, recusandae veniam
              consequatur illum deserunt ab enim molestias magnam repellendus
              dolores? Magnam debitis corporis modi illum.
            </span>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background: rgb(0, 81, 117);
  background: linear-gradient(19deg, #005175 6%, #003157 27%, #000000 81%);
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export default DetailsPage;
