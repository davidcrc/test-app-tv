import { KeyPressDetails } from "@noriginmedia/norigin-spatial-navigation";
import { HTMLAttributes } from "react";

export interface SettingOptionProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  isSelected: boolean;
  onEnterPress: (props: object, details: KeyPressDetails) => void;
}
