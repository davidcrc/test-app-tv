import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { ContentRowProps } from "./types";
import { useCallback, useRef } from "react";
import * as S from "./content-row.style";
import { Asset } from "./components/asset";

export const ContentRow = ({
  title: rowTitle,
  assets,
  onAssetPress,
  onFocus,
}: ContentRowProps) => {
  const { ref, focusKey } = useFocusable({
    onFocus,
  });

  const scrollingRef = useRef<HTMLDivElement>(null);

  const onAssetFocus = useCallback(
    ({ x }: { x: number }) => {
      if (scrollingRef.current) {
        scrollingRef.current.scrollLeft = x;
        scrollingRef.current.style.scrollBehavior = "smooth";
      }
    },
    [scrollingRef]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <S.ContentRowWrapper ref={ref}>
        <S.ContentRowTitle>{rowTitle}</S.ContentRowTitle>

        <S.ContentRowScrollingWrapper ref={scrollingRef}>
          <S.ContentRowScrollingContent>
            {assets.map(({ title, color }) => (
              <Asset
                key={title}
                title={title}
                color={color}
                onEnterPress={onAssetPress}
                onFocus={onAssetFocus}
              />
            ))}
          </S.ContentRowScrollingContent>
        </S.ContentRowScrollingWrapper>
      </S.ContentRowWrapper>
    </FocusContext.Provider>
  );
};
