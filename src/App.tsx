import React from "react";
import logo from "./logo.svg";
import { header } from "./components/molecules/header/header";
import styles from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <div className={styles.root}>
      Trend Movies
      <header />
    </div>
  );
};
