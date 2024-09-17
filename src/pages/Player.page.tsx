import { CustomVideoPlayer } from "../shared/ui/video-player";


export const PlayerPage = ({ close }: { close?: () => void }) => {
  return (
    <CustomVideoPlayer
      onClose={close}
      src="https://media2.ldscdn.org/assets/music/the-power-of-sacred-music/2020-01-0050-sacred-music-videos-my-redeemer-lives-720p-eng.mp4"
    />
  );
};
