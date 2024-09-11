import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../router/paths/path.routes";

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

  // &::-webkit-scrollbar {
  //   display: none;
  // }

  > div {
    // background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: calc(33.33% - 20px);
    min-width: 250px;
    max-width: 350px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: calc(50% - 20px);
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

const EpisodesPage = () => {
  const { ref, focusKey } = useFocusable({
    focusKey: "EPISODES",
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <EpisodesContainer ref={ref}>
        {/* <div> */}
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <EpisodeGrid key={index} index={index} />
          ))}
        {/* </div> */}
      </EpisodesContainer>
    </FocusContext.Provider>
  );
};

const EpisodeGrid = ({ index }: { index: number }) => {
  const { ref, focusKey } = useFocusable({
    // onFocus,
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        <Episode index={index} />
      </div>
    </FocusContext.Provider>
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
  background-color: ${({ color }) => color};
  border-color: white;
  border-style: solid;
  border-width: ${({ focused }) => (focused ? "6px" : 0)};
  box-sizing: border-box;
  border-radius: 7px;
  background-image: url("https://random.imagecdn.app/500/150");
`;

const Episode = ({ index }: { index: number }) => {
  const navigate = useNavigate();

  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      console.log("onEnterPress");
      navigate(`${Paths.PLAYER}/${index}`);
    },
  });

  return (
    <EpisodeCard ref={ref} focused={focused} color="#565b6b">
      Episodio {index}
    </EpisodeCard>
  );
};

export default EpisodesPage;
