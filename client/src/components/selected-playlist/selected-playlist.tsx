import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";

import { RootState } from "state/root";

import Tracklist from "components/tracklist/tracklist";
import PlaylistHeader from "components/playlist-header/playlist-header";

import styles from "./selected-playlist.module.scss";

const SelectedPlaylist = () => {
  const playlist = useSelector((state: RootState) => state.selectedPlaylist);
  const dispatch = useDispatch();

  return (
    <div className={styles.playlistContainer}>
      <PlaylistHeader playlist={playlist} dispatch={dispatch} />
      <Tracklist
        tracks={get(playlist, "tracks.items", [])}
        onSelectTrack={(track: any) =>
          dispatch({ type: "SELECT_TRACK", payload: track })
        }
      />
    </div>
  );
};

export default SelectedPlaylist;
