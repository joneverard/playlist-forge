import React from "react";

import AppHeader from "components/header/header";

import styles from "./app.module.scss";

function App() {
  return (
    <main className={styles.main}>
      <AppHeader />
      <div className={styles.container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}

export default App;

// things we need
// header component - where are we and navigation
// main container
// three columns
// three list components
// ... with very different requirements (although there is probably a lot we can do here to reuse code)
