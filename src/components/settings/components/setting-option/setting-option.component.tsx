import { SettingOptionProps } from "./types";
import * as S from "./setting-option.style";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

export const SettingOption = ({ label }: SettingOptionProps) => {
  const { ref, focused } = useFocusable();

  return (
    <S.Options ref={ref} $focused={focused}>
      {label}
    </S.Options>
  );
};
