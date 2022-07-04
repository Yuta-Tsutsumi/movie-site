import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../molecules/Header/Header";
import styles from "./Pages.module.scss";

export const Pages: React.FC = () => {
  const ApiKey = process.env.REACT_APP_MOVIE_APIKEY;
  // 第一引数：uesEffect内で発火させたい（自動で発火させたい）関数を定義
  // 第二引数：関数の発火タイミングを定義
  useEffect(() => {
    // 自動的に発火させたい関数を定義
    const fetchTrendMovies = async () => {
      try {
        //変数名responseなどにすること
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day",
          {
            params: {
              api_key: ApiKey,
            },
          }
        );
        console.log({ response });
      } catch (error) {
        alert("情報取得が失敗しました");
      }
    };
    // 関数を発火
    fetchTrendMovies();
  }, [ApiKey]);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
    </div>
  );
};

// https://developers.themoviedb.org/3/trending/get-trending
