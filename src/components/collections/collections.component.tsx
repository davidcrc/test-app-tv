import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import * as S from "./collections.style";
import { useCallback } from "react";
import { CollectionGrid } from "./components/collection-grid";

const FOCUS_KEY = "COLLECTIONS";

export const Collections = () => {
  const { ref, focusKey } = useFocusable({
    focusKey: FOCUS_KEY,
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
      <S.CollectionsContainer ref={ref}>
        {Array(50)
          .fill(null)
          .map((_, index) => (
            <CollectionGrid
              key={index}
              index={index}
              onFocus={(layout, props, details) =>
                onRowFocus(layout, props, details, index)
              }
            />
          ))}
      </S.CollectionsContainer>
    </FocusContext.Provider>
  );
};
