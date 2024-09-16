import { useNavigate } from "react-router-dom";
import * as S from "./menu-item.style";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { MenuItemProps } from "./types";

export const MenuItem = ({ item: { icon: Icono, path } }: MenuItemProps) => {
  const navigate = useNavigate();

  const { ref, focused } = useFocusable({
    saveLastFocusedChild: true,
    trackChildren: true,

    onEnterPress: () => {
      navigate(path);
    },
  });
  return (
    <S.MenuItemBox ref={ref} $focused={focused} data-testid="menu-item">
      {<Icono />}
    </S.MenuItemBox>
  );
};
