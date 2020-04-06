import React from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";

import { RootState } from "state/root";

import Tracklist from "components/tracklist/tracklist";

import styles from "./selected-playlist.module.scss";

const SelectedPlaylist = () => {
  const playlist = useSelector((state: RootState) => state.selectedPlaylist);

  return (
    <div className={styles.playlistContainer}>
      <Tracklist tracks={get(playlist, "tracks.items", [])} />
    </div>
  );
};

export default SelectedPlaylist;
