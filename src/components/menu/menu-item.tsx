import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface MenuItemBoxProps {
  focused: boolean;
}

const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: 48px;
  height: 51px;
  border-color: #01b6d1;
  border-style: solid;
  border-width: ${({ focused }) => (focused ? "6px" : 0)};
  box-sizing: border-box;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 37px;

  svg {
    fill: ${({ focused }) => (focused ? "#01B6D1" : "white")};
    stroke: ${({ focused }) => (focused ? "#01B6D1" : "white")};
  }
`;

interface MenuItemProps {
  item: {
    label: string;
    icon: () => JSX.Element;
    path: string;
  };
  onFocus: () => void;
  onSelect: () => void;
}

export function MenuItem({
  item: { label, icon: Icono, path },
}: MenuItemProps) {
  const navigate = useNavigate();

  const { ref, focused } = useFocusable({
    saveLastFocusedChild: true,
    trackChildren: true,

    onEnterPress: () => {
      navigate(path);
    },
  });

  return (
    <MenuItemBox ref={ref} focused={focused} data-testid="menu-item">
      {/* {label} */}
      {<Icono />}
    </MenuItemBox>
  );
}
