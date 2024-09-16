import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import * as S from "./asset.style";
import { AssetProps } from "./types";

export const Asset = ({ title, color, onEnterPress, onFocus }: AssetProps) => {
  const { ref, focused } = useFocusable({
    onEnterPress,
    onFocus,
    extraProps: {
      title,
      color,
    },
  });

  return (
    <S.AssetWrapper ref={ref} data-testid="asset">
      <S.AssetBox $color={color} $focused={focused} data-testid="asset-box" />
      <S.AssetTitle>{title}</S.AssetTitle>
    </S.AssetWrapper>
  );
};
