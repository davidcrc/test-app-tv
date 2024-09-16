import { EpisodeProps } from "./types";
import * as S from "./episode.style";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

export const Episode = ({ index, onSelect }: EpisodeProps) => {
  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      console.log("onEnterPress");
      // navigate(`${Paths.PLAYER}/${index}`);
      onSelect?.();
    },
  });

  return (
    <S.EpisodeCard ref={ref} $focused={focused} $color="#565b6b">
      <div style={{ width: "100%", height: "80%" }}>
        <img
          src="https://random.imagecdn.app/500/150"
          width="100%"
          height="100%"
          alt="episode"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ color: "white" }}>Title {index}</span>
          <span style={{ color: "white" }}>subtitle </span>
        </div>
      </div>
    </S.EpisodeCard>
  );
};
