import {
  TVPlayer,
  TVPlayerButtonProps,
  useTVPlayerStore,
} from "react-tv-player";
import useRemoteControl from "../utils/remote-control";
import { useNavigate } from "react-router-dom";

const customButtons: TVPlayerButtonProps[] = [
  { action: "loop", align: "left" },
  { action: "like", align: "left" },
  { action: "previous", align: "center" },
  { action: "playpause", align: "center" },
  { action: "next", align: "center" },
  { action: "mute", align: "right" },
  {
    action: "custom",
    align: "right",
    label: "About",
    // faIcon: faGithub,
    // onPress: () => {
    //   window.location.href = "https://github.com/lewhunt/react-tv-player";
    // },
  },
];

const hlsMEdia =
  "https://mediasrv.churchofjesuschrist.org/media-services/GA/type/6341323076112/hls.m3u8";
const mp4Media =
  "https://media2.ldscdn.org/assets/music/the-power-of-sacred-music/2020-01-0050-sacred-music-videos-my-redeemer-lives-720p-eng.mp4";
const audioMedia =
  "https://nmcdn-lds.msvdn.net/icecastRelay/101156/GvaVK70/icecast?rnd=637109878513586401";
const streamingMedia =
  "https://psdcdn.churchofjesuschrist.org/p/sep-7-tabernacle-choir-tour-g1.m3u8";

const dashMedia = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";

const PlayerPage = () => {
  const navigate = useNavigate();
  const actions = useTVPlayerStore((s) => s.actions);
  // const playing = useTVPlayerStore((s) => s.playing);

  useRemoteControl({
    onPause: () => {
      actions.setPlaying(false);
    },
    onPlay: () => {
      actions.setPlaying(true);
    },
    onBack: () => {
      navigate(-1);
    },
  });

  return (
    <>
      <TVPlayer
        // url="https://www.youtube.com/watch?v=SkVqJ1SGeL0"
        url={dashMedia}
        subTitle={""}
        customButtons={customButtons}
        playing
      />
    </>
  );
};

export default PlayerPage;
