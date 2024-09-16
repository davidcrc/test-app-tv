import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { CollectionGridProps } from "./types";
import { useState } from "react";
import Modal from "../../../../shared/ui/modal/modal";
import * as S from "./collection-grid.style";
import { Episode } from "./components/episode";
import { PlayerPage } from "../../../../pages";

export const CollectionGrid = ({ index, onFocus }: CollectionGridProps) => {
  const { ref, focusKey } = useFocusable({
    onFocus,
  });

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <FocusContext.Provider value={focusKey}>
        <S.CollectionGridContainer ref={ref}>
          <Episode index={index} onSelect={toggleModal} />
        </S.CollectionGridContainer>
      </FocusContext.Provider>

      <Modal show={showModal} onClose={toggleModal}>
        <PlayerPage close={toggleModal} />
      </Modal>
    </>
  );
};
