import {
  FocusDetails,
  FocusableComponentLayout,
} from "@noriginmedia/norigin-spatial-navigation";

export interface CollectionGridProps {
  index: number;
  onFocus?: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}
