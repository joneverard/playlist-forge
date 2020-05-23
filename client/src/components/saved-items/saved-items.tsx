import React from "react";
import { get } from "lodash";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "state/root";
import Tracklist from "components/tracklist/tracklist";

import styles from "./saved-items.module.scss";

const SavedItems = () => {
  const savedItems = useSelector((state: RootState) => state.savedItems);

  return (
    <div className={styles.playlistContainer}>
      <div className={styles.controls}>{"controls go here"}</div>
      <Tracklist
        tracks={get(savedItems, "tracks", [])}
        onSelectTrack={() => {}}
        // tracks={get(playlist, "tracks.items", [])}
        // onSelectTrack={(track: any) =>
        // dispatch({ type: "SELECT_TRACK", payload: track })
        // }
      />
    </div>
  );
};

export default SavedItems;
