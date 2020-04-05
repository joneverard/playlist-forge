import React from "react";

import styles from "./header.module.scss";

export default () => (
  <div className={styles.header}>
    <a href="/auth/spotify">Login with Spotify</a>
  </div>
);
