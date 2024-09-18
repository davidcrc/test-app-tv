import { SettingOptionProps } from "./types";
import * as S from "./setting-option.style";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

export const SettingOption = ({
  label,
  onEnterPress,
  isSelected,
  onClick,
  ...rest
}: SettingOptionProps) => {
  const { ref, focused, focusSelf } = useFocusable({
    onEnterPress,
  });

  return (
    <S.Options
      ref={ref}
      $isSelected={isSelected}
      $focused={focused}
      onFocus={focusSelf}
      {...rest}
    >
      {label}
    </S.Options>
  );
};
