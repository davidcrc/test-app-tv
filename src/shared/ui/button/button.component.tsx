import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { ButtonProps } from "./types";

export const Button = ({
  children,
  onEnterPress,
  onArrowPress,
  focusKey,
  ...rest
}: ButtonProps) => {
  const { ref, focused, focusSelf } = useFocusable({
    onEnterPress,
    focusKey,
    onArrowPress,
  });

  return (
    <button ref={ref} onFocus={focusSelf} data-focused={focused} {...rest}>
      {children}
    </button>
  );
};
