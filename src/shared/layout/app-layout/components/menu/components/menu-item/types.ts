import { MenuItem } from "../../types";

export interface MenuItemProps {
  item: MenuItem;
  onFocus: () => void;
  onSelect: () => void;
}
