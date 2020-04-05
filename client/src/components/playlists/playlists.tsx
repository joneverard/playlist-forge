import React, { useEffect, useState } from "react";
import { getPlaylists, getPlaylistTracks } from "api/playlists";
import styles from "./playlists.module.scss";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getPlaylists().then(data => {
      console.log(data);
      setPlaylists(data.body.items);
    });
  }, []);

  const getTracks = (e: Event, id: string) => {
    // console.log(e, id);
    getPlaylistTracks(id).then(data => console.log(data));
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
      <img src={imgUrl} className={styles.playlistCover} />
      <h4 className={styles.playlistName}>{name}</h4>
      <span className={styles.meta}>{tracks.total}</span>
    </div>
  );
};
