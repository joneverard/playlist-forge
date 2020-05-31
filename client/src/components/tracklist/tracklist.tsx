import React from "react";
import { Checkbox } from "antd";
import { get } from "lodash";

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
  return (
    <div className={styles.tracksContainer}>
      {tracks.map(({ selected, ...track }) => (
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

interface TrackItemProps {
  track: Track;
  selected: boolean;
  onSelectTrack: Function;
}
const TrackItem = (props: TrackItemProps) => {
  const { track, selected, onSelectTrack } = props;

  return (
    <div className={styles.trackItem} onClick={() => onSelectTrack(track)}>
      <div className={styles.checkbox}>
        <Checkbox checked={selected} />
      </div>
      <img
        className={styles.albumArt}
        src={get(track, "images[2].url", "")}
        alt={track.name}
      />
      <span>{get(track, "artists[0].name")}</span>
      <span>{" - "}</span>
      <span>{get(track, "name", "")}</span>
      {get(track, "explicit") && <span>EXPLICIT</span>}
    </div>
  );
};
