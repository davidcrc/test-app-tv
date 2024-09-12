import * as React from "react";
import {
  useFocusable,
  init,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";
import styled from "styled-components";
import { MenuItem } from "./menu-item";

init({
  debug: false,
  visualDebug: false,
});

interface MenuWrapperProps {
  hasFocusedChild: boolean;
}

const MenuWrapper = styled.div<MenuWrapperProps>`
  min-width: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: ${({ hasFocusedChild }) =>
    hasFocusedChild ? "#4e4181" : "#362C56"};
  padding-top: 37px;
  padding: 24px;
`;

interface MenuProps {
  focusKey: string;
  items: {
    label: string;
    icon: () => JSX.Element;
    path: string;
  }[];
}

export function Menu({ focusKey: focusKeyParam, items }: MenuProps) {
  const [selectedKey, setSelectedKey] = React.useState<string | null>(null);

  const {
    ref,
    focusSelf,
    hasFocusedChild,
    focusKey,
    //setFocus -- to set focus manually to some focusKey
    // navigateByDirection, -- to manually navigate by direction
    // pause, -- to pause all navigation events
    // resume, -- to resume all navigation events
    // updateAllLayouts -- to force update all layouts when needed
  } = useFocusable({
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

  React.useEffect(() => {
    focusSelf();
    // if (selectedKey === null) {
    // }
    // console.log("focusKey !== selectedKey", focusKey, selectedKey);
    // if (focusKey !== selectedKey) {
    //   setSelectedKey(focusKey);
    // }
  }, [focusKey, focusSelf, selectedKey]);

  return (
    <FocusContext.Provider value={focusKey} key={"MENU-CONTEXT"}>
      <MenuWrapper ref={ref} hasFocusedChild={hasFocusedChild}>
        <h1 style={{ color: "white" }}>Logo</h1>
        <div style={{ marginTop: "100%" }}>
          {items.map((item) => (
            <MenuItem
              key={item.label}
              item={item}
              onFocus={() => {
                focusSelf();
              }}
              onSelect={() => {
                setSelectedKey(item.label);
              }}
            />
          ))}
        </div>
      </MenuWrapper>
    </FocusContext.Provider>
  );
}
