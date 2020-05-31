import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { SET_SELECTED_PLAYLIST } from "state/playlists/playlists-reducer";
import { getPlaylists, getPlaylistTracks } from "api/playlists";
import styles from "./playlists.module.scss";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getPlaylists().then(data => {
      console.log(data);
      setPlaylists(data.playlists);
    });
  }, []);

  const getTracks = (e: Event, id: string) => {
    getPlaylistTracks(id).then(({ body }) => {
      console.log("PLAYLIST", body);
      dispatch({ type: SET_SELECTED_PLAYLIST, payload: body });
    });
  };

  return (
    <div className={styles.list}>
      {playlists.map(({ images, name, tracks, id }: Playlist) => (
        <PlaylistItem
          id={id}
          images={images}
          name={name}
          tracks={tracks}
          onClick={getTracks}
        />
      ))}
    </div>
  );
};

export default Playlists;

interface Playlist {
  id: string;
  images: Array<{
    url: string;
  }>;
  name: string;
  tracks: {
    href: string;
    total: number;
  };
  onClick: Function;
}

const PlaylistItem = ({ images, name, tracks, onClick, id }: Playlist) => {
  const { url: imgUrl } = images[0];

  return (
    <div className={styles.playlist} onClick={e => onClick(e, id)}>
      <img src={imgUrl} className={styles.playlistCover} alt={name} />
      <h4 className={styles.playlistName}>{name}</h4>
      <span className={styles.meta}>{tracks.total}</span>
    </div>
  );
};
