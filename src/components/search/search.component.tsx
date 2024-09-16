import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import Input from "../../shared/ui/input/input";

export const Search = () => {
  const { ref, focused } = useFocusable();

  return (
    <div ref={ref} style={{ height: "100%", width: "100%" }}>
      <Input focused={focused} />
    </div>
  );
};
