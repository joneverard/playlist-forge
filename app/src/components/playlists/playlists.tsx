import React from "react";

import styles from "./playlists.module.scss";

let list: string[] = [];
for (let i = 0; i < 100; i++) {
  list.push(`${i}`);
}

const Playlists = (props: any) => {
  return (
    <div className={styles.list}>
      {list.map((i, index) => (
        <PlaylistItem fields={[index, index + 1, index + 3].map(i => `${i}`)} />
      ))}
    </div>
  );
};

export default Playlists;

interface PlaylistProps {
  fields: string[];
}

const PlaylistItem = (props: PlaylistProps) => (
  <div className={styles.playlist}>
    {props.fields.map((field: string) => (
      <span>{"hello"}</span>
    ))}
  </div>
);
