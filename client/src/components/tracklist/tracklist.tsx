import React from "react";
import { Checkbox } from "antd";

import styles from "./tracklist.module.scss";

// TODO - the track info is nested one level deeper. there is
// meta info at the top level. Need to take account of this here,
// in type definition or flow of code (or both).
const Tracklist = ({
  tracks,
  onSelectTrack,
}: {
  tracks: Array<any>;
  onSelectTrack: Function;
}) => {
  console.log(tracks);
  return (
    <div className={styles.tracksContainer}>
      {tracks.map(({ track, selected }) => (
        <TrackItem
          track={track}
          selected={selected}
          onSelectTrack={onSelectTrack}
        />
      ))}
    </div>
  );
};

export default Tracklist;

interface Track {
  name: string;
  id: string;
  album: {
    images: Array<{
      url: string;
    }>;
  };
  artists: Array<{
    name: string;
    id: string;
  }>;
  explicit: boolean;
  selected: boolean;
}

const TrackItem = (props: any = { track: {} }) => {
  const { track, selected, onSelectTrack } = props;

  return (
    <div className={styles.trackItem} onClick={() => onSelectTrack(track)}>
      <div className={styles.checkbox}>
        <Checkbox checked={selected} />
      </div>
      <img className={styles.albumArt} src={track.album.images[0].url} />
      <span>{track.artists[0].name}</span>
      <span>{" - "}</span>
      <span>{track.name}</span>
      {track.explicit && <span>EXPLICIT</span>}
    </div>
  );
};
