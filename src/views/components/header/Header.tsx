import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Trend Movies</div>
    </div>
  );
};

export default Header;
