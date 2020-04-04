import React, { useEffect, useState } from "react";
import { getPlaylists } from "api/playlists";
import styles from "./playlists.module.scss";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getPlaylists().then(data => {
      console.log(data);
      setPlaylists(data.body.items);
    });
  }, []);

  return (
    <div className={styles.list}>
      {playlists.map(({ images, name, description }: Playlist) => (
        <PlaylistItem images={images} name={name} description={description} />
      ))}
    </div>
  );
};

export default Playlists;

interface Image {
  url: string;
}

interface Playlist {
  images: Image[];
  name: string;
  description: string;
}

const PlaylistItem = ({ images, name, description }: Playlist) => {
  const { url: imgUrl } = images[0];

  return (
    <div className={styles.playlist}>
      <img src={imgUrl} className={styles.playlistCover} />
      <div className={styles.detail}>
        <h4 className={styles.playlistName}>{name}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};
