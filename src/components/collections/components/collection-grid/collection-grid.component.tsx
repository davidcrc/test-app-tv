import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { CollectionGridProps } from "./types";
import * as S from "./collection-grid.style";
import { Episode } from "./components/episode";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../router/paths/path.routes";

export const CollectionGrid = ({ index, onFocus }: CollectionGridProps) => {
  const { ref, focusKey } = useFocusable({
    onFocus,
  });

  const navigate = useNavigate();

  const toggleModal = () => {
    navigate(`${Paths.PLAYER}/1`);
  };

  return (
    <>
      <FocusContext.Provider value={focusKey}>
        <S.CollectionGridContainer ref={ref}>
          <Episode index={index} onSelect={toggleModal} />
        </S.CollectionGridContainer>
      </FocusContext.Provider>
    </>
  );
};
