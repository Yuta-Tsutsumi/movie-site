import React from "react";
import { MovieItemType } from "../../types/movieTypes";
import styles from "./MovieItem.module.scss";

type Props = {
  // 映画情報の型の定義（id、映画のポスター画像、映画タイトル、映画の概要説明）
  item: MovieItemType;

  // 以下は後々説明します〜
  // マウスがポスターの上にのっているかを判定するフラグ
  // onMouse: boolean;
  // マウスがポスターの上にのった時に発火する関数
  // onMouseOver: () => void;
  // マウスがポスターの上から離れた時に発火する関数
  // onMouseOut: () => void;
};

const MovieItem: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.root}>
      {item.title}
      {item.poster_path}
      {item.overview}
    </div>
  );
};
export default MovieItem;
