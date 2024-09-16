import { useEffect, useState } from "react";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { Logo } from "../../../../assets/svg/Logo";
import { MenuItem } from "./components/menu-item";
import { MenuProps } from "./types";
import * as S from "./menu.style";

export const Menu = ({ focusKey: focusKeyParam, items }: MenuProps) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const { ref, focusSelf, focusKey } = useFocusable({
    focusable: true,
    saveLastFocusedChild: true,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: undefined,
    onEnterPress: () => {
      console.log("press me");
    },
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
    extraProps: { foo: "bar" },
  });

  useEffect(() => {
    focusSelf();
  }, [focusKey, focusSelf, selectedKey]);

  return (
    <FocusContext.Provider value={focusKey} key="MENU-CONTEXT">
      <S.MenuWrapper ref={ref}>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        {items.map((item) => (
          <MenuItem
            key={item.label}
            item={item}
            onFocus={() => focusSelf()}
            onSelect={() => setSelectedKey(item.label)}
          />
        ))}
      </S.MenuWrapper>
    </FocusContext.Provider>
  );
};
