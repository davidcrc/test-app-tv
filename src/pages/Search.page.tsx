import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import Input from "../components/ui/input/input";

const SearchPage = () => {
  const { ref, focused } = useFocusable();

  return (
    <div ref={ref} style={{ height: "100%", width: "100%" }}>
      <h1 style={{ color: "white" }}>Search</h1>
      <Input focused={focused} />
    </div>
  );
};

export default SearchPage;
