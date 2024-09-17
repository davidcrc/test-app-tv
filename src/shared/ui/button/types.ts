import {
  ArrowPressHandler,
  FocusDetails,
} from "@noriginmedia/norigin-spatial-navigation";
import { HtmlHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onEnterPress?: (focusDetails?: FocusDetails | undefined) => void;
  onArrowPress?: ArrowPressHandler<FocusDetails | undefined>;
  focusKey?: string;
}
