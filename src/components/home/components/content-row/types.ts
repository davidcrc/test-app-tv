import { FocusDetails, FocusableComponentLayout, KeyPressDetails } from "@noriginmedia/norigin-spatial-navigation";
import { IAsset } from "./components/asset/types";

export interface ContentRowProps {
  title: string;
  assets: IAsset[];
  onAssetPress: (props: object, details: KeyPressDetails) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}
