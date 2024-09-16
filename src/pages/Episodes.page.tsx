import {
  FocusableComponentLayout,
  FocusContext,
  FocusDetails,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../router/paths/path.routes";
import { useCallback, useState } from "react";
import Modal from "../components/ui/modal/modal";
import PlayerPage from "./Player.page";
import Details from "./details";

// export const EpisodesContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   gap: 16px;
//   padding: 24px;
//   div {
//     width: 100%;
//   }

//   overflow-y: auto;

//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

export const EpisodesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow-y: auto;
  height: calc(100vh);
  padding: 20px;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const EpisodesPage = () => {
  const { ref, focusKey } = useFocusable({
    focusKey: "EPISODES",
    autoRestoreFocus: true,
    saveLastFocusedChild: true,
  });

  const onRowFocus = useCallback(
    (layout: any, obj: any, details: any, y: number) => {
      if (ref.current) {
        const container = ref.current;
        const card = container.children[y]; // Suponiendo que `y` es el índice de la card

        if (card) {
          const cardRect = card.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          // Verifica si la card está fuera del área visible en la parte inferior del contenedor
          if (cardRect.bottom > containerRect.bottom) {
            container.scrollTop += cardRect.bottom - containerRect.bottom;
            container.style.scrollBehavior = "smooth";
          }

          // Si también quieres que se mueva hacia arriba cuando la card no es visible en la parte superior
          if (cardRect.top < containerRect.top) {
            container.scrollTop -= containerRect.top - cardRect.top;
            container.style.scrollBehavior = "smooth";
          }
        }
      }
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <EpisodesContainer ref={ref}>
        {Array(50)
          .fill(null)
          .map((_, index) => (
            <EpisodeGrid
              key={index}
              index={index}
              onFocus={(layout, props, details) =>
                onRowFocus(layout, props, details, index)
              }
            />
          ))}
      </EpisodesContainer>
    </FocusContext.Provider>
  );
};

export const EpisodesGridContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(33.33% - 20px);
  min-width: 234px;
  max-width: 234px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const EpisodeGrid = ({
  index,
  onFocus,
}: {
  index: number;
  onFocus?: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}) => {
  const { ref, focusKey } = useFocusable({
    onFocus,
    saveLastFocusedChild: true,
  });

  const [showModal, setShowModal] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const toggleModal = () => {
    setShowModal((value) => !value);
  };

  const togglePlayer = () => {
    setShowPlayer((value) => !value);
  };

  return (
    <>
      <FocusContext.Provider value={focusKey}>
        <EpisodesGridContainer ref={ref}>
          <Episode index={index} onSelect={toggleModal} />
        </EpisodesGridContainer>
      </FocusContext.Provider>

      {showModal && (
        <Modal show={showModal} onClose={toggleModal}>
          {!showPlayer && (
            <Details
              showPlayer={() => setShowPlayer(true)}
              onBack={toggleModal}
            />
          )}

          {showPlayer && <PlayerPage close={togglePlayer} />}
        </Modal>
      )}
    </>
  );
};

interface AssetBoxProps {
  focused: boolean;
  color: string;
}

const EpisodeCard = styled.div<AssetBoxProps>`
  width: 100%;
  height: 100%;
  min-height: 250px;
  border-color: #007da5;
  border-style: solid;
  border-width: ${({ focused }) => (focused ? "6px" : 0)};
  box-sizing: border-box;
  border-radius: 7px;
  transition: transform 0.4s ease-in-out;
  transform: scale(${({ focused }) => (focused ? "1.05" : "1")});
`;

const Episode = ({
  index,
  onSelect,
}: {
  index: number;
  onSelect?: () => void;
}) => {
  // const navigate = useNavigate();

  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      console.log("onEnterPress");
      // navigate(`${Paths.PLAYER}/${index}`);
      onSelect?.();
    },
    saveLastFocusedChild: true,
  });

  return (
    <EpisodeCard ref={ref} focused={focused} color="#565b6b">
      <div style={{ width: "100%", height: "80%" }}>
        <img
          src="https://random.imagecdn.app/500/150"
          width="100%"
          height="100%"
          alt="episode"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ color: "white" }}>Title {index}</span>
          <span style={{ color: "white" }}>subtitle </span>
        </div>
      </div>
    </EpisodeCard>
  );
};

export default EpisodesPage;
