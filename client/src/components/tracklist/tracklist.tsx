import React from "react";

import styles from "./tracklist.module.scss";

// TODO - the track info is nested one level deeper. there is
// meta info at the top level. Need to take account of this here,
// in type definition or flow of code (or both).
const Tracklist = ({ tracks }: { tracks: Array<any> }) => {
  console.log(tracks);
  return (
    <div className={styles.tracksContainer}>
      {tracks.map(({ track }) => (
        <TrackItem track={track} />
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
}

const TrackItem = (props: any = { track: {} }) => {
  const { track } = props;
  return (
    <div className={styles.trackItem}>
      <img className={styles.albumArt} src={track.album.images[0].url} />
      <span>{track.artists[0].name}</span>
      <span>{" - "}</span>
      <span>{track.name}</span>
      {track.explicit && <span>EXPLICIT</span>}
    </div>
  );
};
