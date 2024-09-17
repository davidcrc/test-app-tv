import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import * as S from "./home.style";
import { shuffle } from "lodash";
import { useCallback, useState } from "react";
import { MOCK_DATA_ROWS } from "./mock-data";
import { ContentRow } from "./components/content-row";
import { IAsset } from "./components/content-row/components/asset/types";

const FOCUS_KEY = "CONTENT";

export const Home = () => {
  const { ref, focusKey } = useFocusable({
    focusKey: FOCUS_KEY,
  });

  const [selectedAsset, setSelectedAsset] = useState<IAsset | null>(null);

  const onAssetPress = useCallback((asset: any) => {
    console.log("onAssetPress", asset);
    setSelectedAsset(asset);
  }, []);

  const onRowFocus = useCallback(
    ({ y }: { y: number }) => {
      console.log(y);
      console.log(ref.current);
      if (ref.current) {
        ref.current.scrollTop = y;
        ref.current.style.scrollBehavior = "smooth";
      }
    },
    [ref]
  );

  const rows = shuffle(MOCK_DATA_ROWS);

  return (
    <FocusContext.Provider value={focusKey}>
      <S.ContentWrapper>
        <S.ContentTitle />

        <S.SelectedItemWrapper>
          <S.SelectedItemBox
            color={selectedAsset ? selectedAsset.color : "#565b6b"}
            data-testid="selected-box"
          />
          <S.SelectedItemTitle data-testid="selected-title">
            {selectedAsset
              ? selectedAsset.title
              : 'Press "Enter" to select an asset'}
          </S.SelectedItemTitle>
        </S.SelectedItemWrapper>

        <S.ScrollingRows ref={ref}>
          {rows.map(({ title, assets }) => (
            <ContentRow
              assets={assets}
              key={title}
              title={title}
              onAssetPress={onAssetPress}
              onFocus={onRowFocus}
            />
          ))}
        </S.ScrollingRows>
      </S.ContentWrapper>
    </FocusContext.Provider>
  );
};
