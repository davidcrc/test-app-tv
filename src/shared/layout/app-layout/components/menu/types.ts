export interface MenuItem {
  label: string;
  icon: () => JSX.Element;
  path: string;
}

export interface MenuProps {
  focusKey: string;
  items: MenuItem[];
}
